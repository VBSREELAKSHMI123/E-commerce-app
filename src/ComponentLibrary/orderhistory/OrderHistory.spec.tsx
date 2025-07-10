import { render, screen } from "@testing-library/react";
import React from "react";
import OrderHistory from "./OrderHistory";
import { OrderType } from "../redux/slices/OrderReducer";
import { configureStore } from "redux-mock-store";
import { Provider } from "react-redux";
import dayjs from "dayjs";

const sampleOrder: OrderType = {
  id: 1752120605241,
  placedAt: "10/07/2025",
  paymentStatus: "success",
  items: [
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      price: 19.99,
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
      rating: 2.86,
    },
  ],
  customers: {
    name: "Sreelakshmi",
    address: "VIYYATH HOUSE",
    city: "Thrissur",
    phone: 8606660873,
    email: "sreelakshmi@gmail.com",
  },
};

const mockStore = configureStore([]);

describe("OrderHistory", () => {
  it("Heading is present or not", () => {
    const store = mockStore({ order: { orders: [] } });

    render(
      <Provider store={store}>
        <OrderHistory />
      </Provider>
    );
    expect(screen.getByText("Order History")).toBeInTheDocument();
  });

  it("order present or not", () => {
    const store = mockStore({
      order: {
        orders: [sampleOrder],
      },
    });
    const placedDate = dayjs(sampleOrder.placedAt).format("MM/DD/YYYY");
    const deliveryDate = dayjs(sampleOrder.placedAt)
      .add(5, "day")
      .format("MM/DD/YYYY");
    render(
      <Provider store={store}>
        <OrderHistory />
      </Provider>
    );
    expect(screen.getByTestId("order-id")).toHaveTextContent(
      `Order ID: ${sampleOrder.id}`
    );
    expect(screen.getByTestId("order-date")).toHaveTextContent(
      `Placed On: ${placedDate}`
    );
    expect(
      screen.getByText("Eyeshadow Palette with Mirror")
    ).toBeInTheDocument();
    expect(screen.getByTestId("item-price")).toHaveTextContent("₹ 19.99");
    expect(screen.getByTestId("order-total")).toHaveTextContent(
      "Total: ₹ 19.99"
    );
    expect(screen.getByTestId("order-delivery")).toHaveTextContent(
      `Delivery: ${deliveryDate}`
    );
  });
});
