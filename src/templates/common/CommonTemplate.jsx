import MainNavbar from "../../organisms/Main Navbar/MainNavbar";
import TopNavbar from "../../organisms/TopNavBar/TopNavbar";
import Footer from "../../organisms/Footer/Footer";
// import HeroSlider from "../../organisms/HeroSlider/HeroSlider";
// import heroImg1 from "../../assets/nature_img1.jpg";
// import heroImg2 from "../../assets/nature_img2.jpg";
// import AboutInfo from "../../organisms/AboutInfo/AboutInfo";
// import aboutImg from "../../assets/about-img.png";
// import recentTrip1 from "../../assets/recent_trip1.png";
// import recentTrip2 from "../../assets/recent_trip2.png";
// import recentTrip3 from "../../assets/recent_trip3.png";
// import { RecentTrips } from "../../organisms/RecentTrips/RecentTrips";

const CommonTemplate = () => {
  const topNavBarProps = {
    phone: "+919115955017",
    href: "tel:9115955017",
    email: "narindersingh00690@gmail.com",
    facebook: "http://facebook.com",
    instagram: "http://instagram.com",
    linkedin: "https://x.com/?lang=en&mx=2",
    twitter: "http://twitter.com",
  };

  const mainNavBarProps = {
    label: "ReactProject",
    href: "#",
    labelStyle: "logo-style",
    classes: "nav-links",
    menuItems: [
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
    ],
  };

  // const heroSliderProps = {
  //   imageSlides: [
  //     {
  //       image: heroImg1,
  //       alt: "hero image 1",
  //       label: "If you truly love nature you will find beauty everywhere",
  //     },
  //     {
  //       image: heroImg2,
  //       alt: "hero image 2",
  //       label: "Nature is pleased with simplicity and nature is no dummy",
  //     },
  //   ],
  // };

  //  const aboutInfoProps = {
  //   label: "About Us",
  //   caption:
  //     "Nature is the biggest reason for our easy survival on this planet. It provides us with food, clothing, and shelter. The sunlight, plants, air, rain, animals, and everything come together to complete nature. It makes our environment liveable and beautiful. It has given life to human beings, and it was present even before the evolution of human beings. It makes a natural cycle for the smooth functioning of every living being on this planet. There is a reason why nature is referred to as “mother”. Mother nature cherishes and nurtures us.",
  //   image: aboutImg,
  //   alt: "About us image",
  // };

  const footerProps = {
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
  };

  // const recentTripsProps = {
  //   tripLabel: "Recent Trips",
  //   tripDetails: [
  //     {
  //       tripImg: recentTrip1,
  //       tripDate: "Oct 12, 2022",
  //       tripCaption: "Journeys Are Best Measured In New Friends",
  //       alt: "Trip Image 1",
  //     },
  //     {
  //       tripImg: recentTrip2,
  //       tripDate: "Nov 12, 2023",
  //       tripCaption: "Journeys Are Best Measured In New Friends",
  //       alt: "Trip Image 2",
  //     },
  //     {
  //       tripImg: recentTrip3,
  //       tripDate: "July 7, 2024",
  //       tripCaption: "Journeys Are Best Measured In New Friends",
  //       alt: "Trip Image 3",
  //     },
  //   ],
  // };

  return (
    <>
      <TopNavbar props={topNavBarProps}></TopNavbar>
      <MainNavbar props={mainNavBarProps}></MainNavbar>
      {/* <HeroSlider props={heroSliderProps}></HeroSlider>
      <AboutInfo props={aboutInfoProps}></AboutInfo>
      <RecentTrips props={recentTripsProps}></RecentTrips> */}
      <Footer props={footerProps}></Footer>
    </>
  );
};

export default CommonTemplate;
