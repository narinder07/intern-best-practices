import { createSlice } from "@reduxjs/toolkit";
import sectionImg3 from "../../assets/section_img3.jpg";

const initialState = {
  headerImagesProps: {
    mainText: "Contact Us",
    mainImg: sectionImg3,
    alt: "About us Image",
  },
};

export const contactUsSlice = createSlice({
  name: "contactUs",
  initialState,
  reducers: {
    headerImages: (state) => {
      state.headerImagesProps;
    },
  },
});
export const { headerImages } = contactUsSlice.actions;
export default contactUsSlice.reducer;
