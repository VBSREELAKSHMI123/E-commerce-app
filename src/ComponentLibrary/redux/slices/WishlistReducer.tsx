import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductType {
  id: number;
  title: string;
  price: number;
  image?: string;
  thumbnail?: string;
  rating: number | { rate: number; count?: number };
}



interface WishlistState {
  items: ProductType[] 
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<ProductType>) => {
          const exists = state.items.find((item) => item.id === action.payload.id);
          
          if (!exists) {
            state.items.push(action.payload);
            console.log("added to wishlist:", action.payload);
          } else {
            console.log("already in wishlist:", action.payload.id);
          }
        
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
        console.log("removed from wishlist:",action.payload)
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
