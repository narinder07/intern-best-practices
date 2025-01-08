import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formValues: {
    photoUrl: "www.noolapp.com",
  },
  errors: {},
};

const signUpFormSlice = createSlice({
  name: "signUpFormSlice",
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
    clearSignUpError: (state, action) => {
      const { name } = action.payload;
      state.errors = {
        ...state.errors,
        [name]: "",
      };
    },
  },
});

export const { setFormValues, setSignUpErrors, clearSignUpError } =
  signUpFormSlice.actions;
export default signUpFormSlice.reducer;
