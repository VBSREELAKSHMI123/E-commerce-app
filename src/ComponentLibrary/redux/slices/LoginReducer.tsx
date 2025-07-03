import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    redirectUrl: null,
  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      state.redirectUrl = null;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      console.log("Logout Successfully")
    },
    setRedirectUrl: (state, action) => {
      state.redirectUrl = action.payload;
      
    },
  },
});

export const { login, logout,setRedirectUrl } = authSlice.actions;
export default authSlice.reducer;
