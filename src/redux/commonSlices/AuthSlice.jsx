import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authData : {},
  isAuthenticated: false
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      console.log("setUserData", action.payload);
      state.authData = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.authData = {};
      state.isAuthenticated = false;
    },
  },
});

export const { setUserData, logout } = authSlice.actions;
export default authSlice.reducer;
