import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: null,
    loading: false,
    error: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.error = null;
      console.log("Redux payload stored:", action.payload);
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.userInfo = null;
    },
    logout: (state) => {
      state.userInfo = null;
      state.loading = false;
      state.error = null;
    }
  },
});

export const {registerStart,registerSuccess,registerFailure,logout} = userSlice.actions
export default userSlice.reducer