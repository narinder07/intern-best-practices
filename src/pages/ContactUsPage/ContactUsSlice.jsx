import { createSlice } from "@reduxjs/toolkit";
import sectionImg3 from "../../assets/section_img3.jpg";
import address from "../../assets/address.png";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";

const initialState = {
  headerImagesProps: {
    mainText: "Contact Us",
    mainImg: sectionImg3,
    alt: "About us Image",
  },
  contactMeProps: {
    contact: [
      {
        image: address,
        label: "Address",
        info: "Swaraj Enclave 126 Mohali",
      },
      {
        image: phone,
        label: "Call Us",
        info: "9115955017",
        href: "tel:9115955017",
      },
      {
        image: email,
        label: "Email Us",
        info: "narindersingh00690@gmail.com",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=example@gmail.com&su=Hello&body=This%20is%20a%20test%20email.",
      },
    ],
  },
};

export const contactUsSlice = createSlice({
  name: "contactUs",
  initialState,
  reducers: {
    headerImages: (state) => {
      state.headerImagesProps;
    },
    contactMe: (state) => {
      state.contactMeProps;
    },
  },
});
export const { headerImages, contactMe } = contactUsSlice.actions;
export default contactUsSlice.reducer;
