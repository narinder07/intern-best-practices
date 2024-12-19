import { configureStore } from "@reduxjs/toolkit";
import homePageReducer from "../pages/HomePage/HomePageSlice";
import aboutPageReducer from "../pages/AboutPage/AboutPageSlice";
import blogPageReducer from "../pages/BlogPage/BlogPageSlice";
import servicesPageReducer from "../pages/ServicesPage/ServicesPageSlice";
import contactUsPageReducer from "../pages/ContactUsPage/ContactUsSlice";
import commonTemplateReducer from "../templates/common/CommonTemplateSlice";
// import signUpFormSlice from "../components/organisms/signUpForm/SignUpFormSlice";
// import logInFormSlice from "../components/organisms/LogInForm/LogInForm.slice";
import authSlice from "../redux/commonSlices/AuthSlice";
import formSlice from "../redux/formSlice";

const store = configureStore({
  reducer: {
    homePageReducer: homePageReducer,
    aboutPageReducer: aboutPageReducer,
    blogPageReducer: blogPageReducer,
    servicesPageReducer: servicesPageReducer,
    contactUsPageReducer: contactUsPageReducer,
    commonTemplateReducer: commonTemplateReducer,
    // signUpFormSlice: signUpFormSlice,
    // logInFormSlice: logInFormSlice,
    authSlice: authSlice,
    formSlice: formSlice,
  },
});

export default store;
