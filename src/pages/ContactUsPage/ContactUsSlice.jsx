import { createSlice } from "@reduxjs/toolkit";
import sectionImg3 from "../../assets/section_img3.jpg";

const initialState = {
  headerImagesProps: {
    mainText: "Contact Us",
    mainImg: sectionImg3,
    alt: "About us Image",
  },

  formProps: {
    formHeading: "Contact Us",
    formTitle: "Get In Touch With Us",
    formPara: "Join me on my journey—let's explore the world together",
    email: "narindersingh0069@gmail.com",
    phone: "+919115955017",
    location: "69 Street India",
    facebook: "http://facebook.com",
    instagram: "http://instagram.com",
    linkedin: "https://x.com/?lang=en&mx=2",
    twitter: "http://twitter.com",
  },
};

export const contactUsSlice = createSlice({
  name: "contactUs",
  initialState,
  reducers: {
    headerImages: (state) => {
      state.headerImagesProps;
    },
    form: (state) => {
      state.formProps;
    },
  },
});
export const { form, headerImages } = contactUsSlice.actions;
export default contactUsSlice.reducer;
