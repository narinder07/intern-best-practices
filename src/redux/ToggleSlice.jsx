import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signUp: { password: false, confirmPassword: false },
  logIn: { password: false },
  showNavbar: false,
};

const toggleSlice = createSlice({
  name: "toggleSlice",
  initialState,
  reducers: {
    togglePassword: (state, action) => {
      const { formName, passwordFields } = action.payload;
      state[formName][passwordFields] = !state[formName][passwordFields];
    },
    toggleNavbar: (state) => {
      state.showNavbar = !state.showNavbar;
    },
  },
});

export const { togglePassword, toggleNavbar } = toggleSlice.actions;
export default toggleSlice.reducer;
