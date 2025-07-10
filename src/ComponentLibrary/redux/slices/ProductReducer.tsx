import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductType {
  id: number;
  title: string;
  price: number;
  image?: string;
  thumbnail?: string;
  rating: number ;
}

interface ProductState {
  product: ProductType[];
}

const initialState: ProductState = {
  product: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<ProductType[]>) => {
          state.product = action.payload;
          console.log("Products stored in redux",state.product)
    },
  },
});

export const { addProducts } = productSlice.actions;
export default productSlice.reducer;
export type { ProductType };