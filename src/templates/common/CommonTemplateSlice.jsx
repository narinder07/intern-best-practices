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
  },
  mainNavBarProps: {
    label: "ReactProject",
    href: "/",
    labelStyle: "logo-style",
    classes: "nav-links",
    menuItems: [
      {
        href: "/",
        name: "Home",
      },
      {
        href: "/about",
        name: "About",
      },
      {
        href: "/blog",
        name: "Blog",
        isActive: true,
      },
      {
        href: "/services",
        name: "Services",
      },
      {
        href: "/contact",
        name: "Contact Us",
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
    copyrightSpan2: "Travel",
    copyrightText1: " All right reserved.",
    copyrightText2: " Designed By ",
    copyrightText3: " By Using ",
    copyrightText4: "React and Bootstrap",
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
