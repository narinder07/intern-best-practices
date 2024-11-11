import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authData: JSON.parse(localStorage.getItem("user")) || {},
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.authData = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
    },
    logout: (state) => {
      state.authData = {};
      state.isAuthenticated = false;
      localStorage.removeItem("user");
      localStorage.setItem("isAuthenticated", JSON.stringify(false));
    },
  },
});

export const { setUserData, logout } = authSlice.actions;
export default authSlice.reducer;
