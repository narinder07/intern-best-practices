import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formValues: {
    displayName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  },
  errors:{}
  
};

export const signUpFormSlice = createSlice({
  name: "signUpForm",
  initialState,
  reducers: {
    setFormValues: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        if (action.payload[key] !== undefined) {
          state.formValues[key] = action.payload[key];
        }
      });
    },
    setSignUpErrors: (state, action) => {
      state.errors = action.payload.errors;
    },
  },
});

export const { setFormValues, setSignUpErrors } = signUpFormSlice.actions;
export default signUpFormSlice.reducer;
