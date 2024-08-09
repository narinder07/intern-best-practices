import TopNavbar from "./organisms/Navbar/TopNavbar";
import MainNavbar from "./organisms/Main Navbar/MainNavbar";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import HeroSlider from "./organisms/HeroSlider/HeroSlider";
import heroImg1 from "./assets/nature_img1.jpg";
import heroImg2 from "./assets/nature_img2.jpg";

const App = () => {
  //Hero slider image
  const imageSlides = [
    {
      image: heroImg1,

      alt: "hero image 1",
      label: "If you truly love nature you will find beauty everywhere",
    },
    {
      image: heroImg2,
      alt: "hero image 2",
      label: "Nature is pleased with simplicity and nature is no dummy",
    },
  ];
  // main menu links
  const menuItems = [
    {
      href: "#",
      key: "home",
      name: "Home",
    },
    {
      href: "#",
      key: "about",
      name: "About",
    },
    {
      href: "#",
      key: "blog",
      name: "Blog",
    },
    {
      href: "#",
      key: "services",
      name: "Services",
    },
    {
      href: "#",
      key: "contact us",
      name: "Contact Us",
    },
  ];
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
      <MainNavbar
        label="ReactProject"
        href="#"
        labelStyle="logo-style"
        classes="nav-links"
        menuItems={menuItems}
      />
      <HeroSlider imageSlides={imageSlides} />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
