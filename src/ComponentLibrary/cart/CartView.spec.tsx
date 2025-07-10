import configureStore from "redux-mock-store";
import React from "react";
import { ProductType } from "../redux/slices/CartReducer";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import CartView from "./CartView";

const mockStore = configureStore([]);

const sampleProduct: ProductType = {
  id: 101,
  title: "Apple AirPods Max Silver",
  price: 549.99,
  image:"https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp",
  rating: 3.47,
};

const mockPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));


describe("CartView", () => {
  it("elements present or not", () => {
    const store = mockStore({
      cart: {
        item: [sampleProduct],
      },
    });

    render(
      <Provider store={store}>
        <CartView />
      </Provider>
    );

    expect(screen.getByText("Apple AirPods Max Silver")).toBeInTheDocument();
    expect(screen.getByText("₹ 549.99")).toBeInTheDocument();
    const stars = screen.getAllByRole("img", { hidden: true });
    expect(stars.length).toBeGreaterThanOrEqual(2);
  });

  it("checkout button present or not", () => {
    const store = mockStore({
      cart: {
        item: [],
      },
    });

    render(
      <Provider store={store}>
        <CartView />
      </Provider>
    );

    const checkoutButton = screen.getByText(/checkout/i);
    fireEvent.click(checkoutButton);
    expect(mockPush).toHaveBeenCalledWith("/checkout");
  });

  it("delete button clicked", () => {
    const store = mockStore({
      cart: {
        item: [sampleProduct],
      },
    });

    render(
      <Provider store={store}>
        <CartView />
      </Provider>
    );

    const deleteButton = screen.getByRole("button", {
      name: /delete item/i,
    });

    fireEvent.click(deleteButton);
    const actions = store.getActions();
    expect(actions).toContainEqual({
      type: "cart/removeFromCart",
      payload: 101,
    });
  });

  it("cart is empty or not", () => {
    const store = mockStore({
      cart: {
        item: [],
      },
    });
    render(
      <Provider store={store}>
        <CartView />
      </Provider>
    );
    expect(screen.getByText("Your Cart (0 Items)")).toBeInTheDocument();
    expect(screen.getByText("Your Cart is Empty")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Looks like you haven’t added anything yet. Start shopping now!"
      )
    ).toBeInTheDocument();
  });
});
