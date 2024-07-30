import TopNavbar from "./organisms/Navbar/TopNavbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <TopNavbar
        phone="+91 9876543210"
        email="demo@gmail.com"
        facebook="http://facebook.com"
        instagram="http://instagram.com"
        linkedin="http://lindedin.com"
        twitter="http://twitter.com"
      />
      <Hero />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
