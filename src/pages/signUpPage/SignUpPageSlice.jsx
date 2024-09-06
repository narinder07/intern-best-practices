import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayName: "Durga Parshad",
  email: "durgadp16@gmail.com",
  username: "durgadp16",
  password: "amit123",
  confirmPassword: "amit123",
};

export const signUpFormSlice = createSlice({
  name: "signUpForm",
  initialState,
  reducers: {},
});

export default signUpFormSlice.reducer;
