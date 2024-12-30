import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topNavBarProps: {
    phone: "+919115955017",
    href: "tel:9115955017",
    email: "narindersingh00690@gmail.com",
    facebook: "http://facebook.com",
    instagram: "http://instagram.com",
    linkedin: "https://x.com/?lang=en&mx=2",
    twitter: "http://twitter.com",
    gmailRef:
      "https://mail.google.com/mail/?view=cm&fs=1&to=example@gmail.com&su=Hello&body=This%20is%20a%20test%20email.",
  },
  mainNavBarProps: {
    label: "ReactProject",
    href: "/",
    labelStyle: "logo-style",
    classes: "nav-links",
    menuItems: [
      {
        to: "/",
        name: "Home",
        isActive: true,
      },
      {
        to: "/about",
        name: "About",
        isActive: false,
      },
      {
        to: "/blog",
        name: "Blog",
        isActive: false,
      },
      {
        to: "/services",
        name: "Services",
        isActive: false,
      },
      {
        to: "/contact",
        name: "Contact Us",
        isActive: false,
      },
    ],
  },
  footerProps: {
    quickLinks: [
      { href: "#", text: "About Us" },
      { href: "#", text: "Contact Us" },
      { href: "#", text: "Our Services" },
      { href: "#", text: "Term & Condition" },
      { href: "#", text: "Support" },
    ],
    services: [
      { href: "#", text: "HTML" },
      { href: "#", text: "CSS" },
      { href: "#", text: "Javascript" },
      { href: "#", text: "Bootstrap" },
      { href: "#", text: "React Js" },
    ],
    label1: "Get In Touch",
    label2: "Quick Links",
    label3: "Services",
    email: "narindersingh00690@gmail.com",
    phone: "+919115955017",
    location: "69 street India",
    copyrightSpan1: "My React Project",
    copyrightSpan2: "Narinder",
    copyrightText1: " All right reserved.",
    copyrightText2: " Designed By ",
    copyrightText3: " Using ",
    copyrightText4: "React Bootstrap Redux Toolkit and StoryBook Atomic Design",
    copyrightSpanStyle: "span-text",
  },
};

export const commonTemplate = createSlice({
  name: "commonTemplate",
  initialState,
  reducers: {
    topNavBar: (state) => {
      state.topNavBarProps;
    },
    mainNavBar: (state) => {
      state.mainNavBarProps;
    },
    footer: (state) => {
      state.footerProps;
    },
  },
});
export const { topNavBar, mainNavBar, footer } = commonTemplate.actions;
export default commonTemplate.reducer;
