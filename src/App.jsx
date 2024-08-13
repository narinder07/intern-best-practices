import TopNavbar from "./organisms/Navbar/TopNavbar";
import MainNavbar from "./organisms/Main Navbar/MainNavbar";
import HeroSlider from "./organisms/HeroSlider/HeroSlider";
import heroImg1 from "./assets/nature_img1.jpg";
import heroImg2 from "./assets/nature_img2.jpg";
import Card from "./organisms/Card/Card";
import cardImg1 from "./assets/card_img1.jpg";
import cardImg2 from "./assets/card_img2.jpg";
import cardImg3 from "./assets/card_img3.jpg";
import aboutImg from "./assets/about-img.png";
import AboutInfo from "./organisms/AboutInfo/AboutInfo";

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
  // cards
  const cardsInfo = [
    {
      cardImages: cardImg1,
      label: "Mountains",
      captionPara:
        "It maintains an ecological system to make everyone live in harmony.",
      alt: "card image 1",
    },
    {
      cardImages: cardImg2,
      label: "Beautiful Tress",
      captionPara:
        "Nature provides us with water to drink, air to breathe, food to eat, clothes to wear, and a shelter to live in.",
      alt: "card image 2",
    },
    {
      cardImages: cardImg3,
      label: "Rivers",
      captionPara:
        "Nature holds a balance between diverse ecosystems for smooth functioning.",
      alt: "card image 3",
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
        linkedin="https://x.com/?lang=en&mx=2"
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
      <AboutInfo
        image={aboutImg}
        label="About Us"
        caption="Nature is the biggest reason for our easy survival on this planet. It provides us with food, clothing, and shelter. The sunlight, plants, air, rain, animals, and everything come together to complete nature. It makes our environment liveable and beautiful. It has given life to human beings, and it was present even before the evolution of human beings. It makes a natural cycle for the smooth functioning of every living being on this planet. There is a reason why nature is referred to as “mother”. Mother nature cherishes and nurtures us."
        alt="About us image"
      />
      <Card cardsInfo={cardsInfo} />
    </>
  );
};

export default App;
