import { createSlice } from "@reduxjs/toolkit";
import pageNotFoundImg from "../../assets/page-not-found.jpg";

const initialState = {
  notFoundPageErrorProps: {
    pageNotFoundImg: pageNotFoundImg,
    alt: "404 Error image",
    pageNotFoundText1:
      "Sorry, we can't seem to find the page you're looking for ",
    pageNotFoundText2:
      "The may be a misspelling in the URL entered or the page you are looking for may no longer exist",
  },
};

const notFoundPageErrorSlice = createSlice({
  name: "notFoundPageErrorSlice",
  initialState,
  reducers: {
    notFoundPage: (state) => {
      state.notFoundPageErrorProps;
    },
  },
});
export const { notFoundPage } = notFoundPageErrorSlice.actions;
export default notFoundPageErrorSlice.reducer;
