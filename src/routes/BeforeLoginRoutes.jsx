import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import ServicesPage from "../pages/ServicesPage";
import ContactUsPage from "../pages/ContactUsPage";

const BeforeLoginRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  );
};

export default BeforeLoginRoutes;
