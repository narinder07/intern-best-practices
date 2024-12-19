import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logInForm: {
    // photoUrl: "www.noolapp.com",
    formValues: { email: "", password: "" },
    errors: {},
  },
  signUpForm: {
    formValues: {
      photoUrl: "www.noolapp.com",
    },
    errors: {},
  },
};

const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    setFormValues: (state, action) => {
      const { formName, formValues } = action.payload;
      state[formName].formValues = {
        ...state[formName].formValues,
        ...formValues,
      };
    },
    setFormErrors: (state, action) => {
      const { formName, errors } = action.payload;
      state[formName].errors = errors;
    },
    clearFormErrors: (state, action) => {
      const { formName, name } = action.payload;
      state[formName].errors = {
        ...state[formName].errors,
        [name]: "",
      };
    },
  },
});

export const { setFormValues, setFormErrors, clearFormErrors } =
  formSlice.actions;

export default formSlice.reducer;
