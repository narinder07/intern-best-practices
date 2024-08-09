import TopNavbar from "./organisms/Navbar/TopNavbar";
import MainNavbar from "./organisms/Main Navbar/MainNavbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <TopNavbar
        phone="+919115955017"
        href="tel:9115955017"
        email="narindersingh00690@gmail.com"
        facebook="http://facebook.com"
        instagram="http://instagram.com"
        linkedin="http://lindedin.com"
        twitter="http://twitter.com"
      />
      <MainNavbar label="ReactProject" href="#" labelStyle="logo-style" />
      <Hero />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
