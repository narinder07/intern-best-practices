<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formValues: {
    displayName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    photoUrl: "www.google.com",
  },
  errors: {},
};

const signUpFormSlice = createSlice({
  name: "signUpForm",
  initialState,
  reducers: {
    setFormValues: (state, action) => {
      state.formValues = {
        ...state.formValues,
        ...action.payload.formValues,
      };
    },
    setSignUpErrors: (state, action) => {
      state.errors = action.payload.errors;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload.userDetails;
    },
  },
});

export const { setFormValues, setSignUpErrors, setUserDetails } =
  signUpFormSlice.actions;
export default signUpFormSlice.reducer;
=======
>>>>>>> fc6c0195026c75e062301b68b49c2d53e5edfcea
