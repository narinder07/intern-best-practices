import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formValues: {
    photoUrl: "www.noolapp.com",
    // email: "",
    // password: "",
  },
  errors: {},
};

const logInFormSlice = createSlice({
  name: "logInFormSlice",
  initialState,
  reducers: {
    setLoginFormValues: (state, action) => {
      state.formValues = {
        ...state.formValues,
        ...action.payload.formValues,
      };
    },
    setLoginFormErrors: (state, action) => {
      state.errors = action.payload.errors;
    },
    clearLoginFormError: (state, action) => {
      const { name } = action.payload;
      state.errors = {
        ...state.errors,
        [name]: "",
      };
    },
  },
});

export const { setLoginFormValues, setLoginFormErrors, clearLoginFormError } =
  logInFormSlice.actions;
export default logInFormSlice.reducer;
