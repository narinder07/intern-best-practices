import { configureStore } from "@reduxjs/toolkit";
import homePageReducer from "../pages/HomePage/HomePageSlice";
import aboutPageReducer from "../pages/AboutPage/AboutPageSlice";
import blogPageReducer from "../pages/BlogPage/BlogPageSlice";
import servicesPageReducer from "../pages/ServicesPage/ServicesPageSlice";
import contactUsPageReducer from "../pages/ContactUsPage/ContactUsSlice";
import commonTemplateReducer from "../templates/common/CommonTemplateSlice";
import authSlice from "../redux/commonSlices/AuthSlice";
import formSlice from "../redux/FormSlice";
import toggleReducer from "../redux/ToggleSlice";
import NotFoundPageReducer from "../pages/notFoundPageError/NotFoundPageErrorSlice";

const store = configureStore({
  reducer: {
    homePageReducer: homePageReducer,
    aboutPageReducer: aboutPageReducer,
    blogPageReducer: blogPageReducer,
    servicesPageReducer: servicesPageReducer,
    contactUsPageReducer: contactUsPageReducer,
    commonTemplateReducer: commonTemplateReducer,
    authSlice: authSlice,
    formSlice: formSlice,
    toggleReducer: toggleReducer,
    NotFoundPageReducer: NotFoundPageReducer,
  },
});

export default store;
