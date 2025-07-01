import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../slices/CartReducer";

interface OrderType {
  id: number;
  items: ProductType[];
  customers: CustomerType;
  placedAt: string;
}

interface CustomerType {
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
}

interface OrderState {
  orders: OrderType[];
}

const initialState: OrderState = {
  orders: [],
};

const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    placeOrder: (
      state,
      action: PayloadAction<{ items: ProductType[]; customers: CustomerType }>
    ) => {
      const newOrder: OrderType = {
        id: Date.now(),
        items: action.payload.items,
        customers: action.payload.customers,
        placedAt: new Date().toISOString(),
      };
      state.orders.push(newOrder);
      console.log("Stored to Order Slice", newOrder);
    },
  },
});

export const { placeOrder } = OrderSlice.actions;
export default OrderSlice.reducer