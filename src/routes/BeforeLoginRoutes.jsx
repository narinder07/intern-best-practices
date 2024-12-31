import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import ContactUsPage from "../pages/ContactUsPage/ContactUsPage";
import SignUpPage from "../pages/signUpPage/SignUpPage";
import ProtectedRoute from "./ProtectedRoutes";
import LogInPage from "../pages/loginPage/LoginPage";

const BeforeLoginRoutes = () => {
  return (
    <Routes>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route
        path="/signup"
        element={<ProtectedRoute element={<SignUpPage />} />}
      />
    </Routes>
  );
};

export default BeforeLoginRoutes;
