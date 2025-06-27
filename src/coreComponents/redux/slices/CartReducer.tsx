import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductType {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [] as ProductType[]
  },
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      state.item.push(action.payload);
      console.log("cart stored in redux", action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.item = state.item.filter(
        (product) => product.id !== action.payload
      );
    },

  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
export type { ProductType };
