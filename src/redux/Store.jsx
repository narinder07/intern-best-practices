import { configureStore } from "@reduxjs/toolkit";
import homePageReducer from "../pages/HomePage/HomePageSlice";
import aboutPageReducer from "../pages/AboutPage/AboutPageSlice";
import blogPageReducer from "../pages/BlogPage/BlogPageSlice";
import servicesPageReducer from "../pages/ServicesPage/ServicesPageSlice";
import contactUsPageReducer from "../pages/ContactUsPage/ContactUsSlice";
import commonTemplateReducer from "../templates/common/CommonTemplateSlice";

const store = configureStore({
  reducer: {
    homePageReducer: homePageReducer,
    aboutPageReducer: aboutPageReducer,
    blogPageReducer: blogPageReducer,
    servicesPageReducer: servicesPageReducer,
    contactUsPageReducer: contactUsPageReducer,
    commonTemplateReducer: commonTemplateReducer,
  },
});

export default store;
