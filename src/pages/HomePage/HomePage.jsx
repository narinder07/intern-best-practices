import CommonTemplate from "../../templates/common/CommonTemplate";
import HeroSlider from "../../organisms/HeroSlider/HeroSlider";
import heroImg1 from "../../assets/nature_img1.jpg";
import heroImg2 from "../../assets/nature_img2.jpg";
import AboutInfo from "../../organisms/AboutInfo/AboutInfo";
import aboutImg from "../../assets/about-img.png";
import { RecentTrips } from "../../organisms/RecentTrips/RecentTrips";
import recentTrip1 from "../../assets/recent_trip1.png";
import recentTrip2 from "../../assets/recent_trip2.png";
import recentTrip3 from "../../assets/recent_trip3.png";
import HappyTravelers from "../../organisms/HappyTravelers/HappyTravelers";

const HomePage = () => {
  const heroSliderProps = {
    imageSlides: [
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
    ],
  };

  const aboutInfoProps = {
    label: "About Us",
    caption:
      "Nature is the biggest reason for our easy survival on this planet. It provides us with food, clothing, and shelter. The sunlight, plants, air, rain, animals, and everything come together to complete nature. It makes our environment liveable and beautiful. It has given life to human beings, and it was present even before the evolution of human beings. It makes a natural cycle for the smooth functioning of every living being on this planet. There is a reason why nature is referred to as “mother”. Mother nature cherishes and nurtures us.",
    image: aboutImg,
    alt: "About us image",
  };

  const recentTripsProps = {
    tripLabel: "Recent Trips",
    tripDetails: [
      {
        tripImg: recentTrip1,
        tripDate: "Oct 12, 2022",
        tripCaption: "Journeys Are Best Measured In New Friends",
        alt: "Trip Image 1",
      },
      {
        tripImg: recentTrip2,
        tripDate: "Nov 12, 2023",
        tripCaption: "Journeys Are Best Measured In New Friends",
        alt: "Trip Image 2",
      },
      {
        tripImg: recentTrip3,
        tripDate: "July 7, 2024",
        tripCaption: "Journeys Are Best Measured In New Friends",
        alt: "Trip Image 3",
      },
    ],
  };

  const happyTravelersProps = {
    travelHeading: "Our Success",
    travelPara:
      "When preparing to travel, lay out all your clothes and all your money. Then take half the clothes and twice the money",
    happyTravel: [
      {
        travelNumbers: 107,
        travelTours: "DESTINATION",
      },
      {
        travelNumbers: 46,
        travelTours: "HOTEL",
      },
      {
        travelNumbers: 97,
        travelTours: "TRAVELERS",
      },
      {
        travelNumbers: 80,
        travelTours: "HAPPY CUSTOMERS",
      },
    ],
  };

  return (
    <CommonTemplate>
      <HeroSlider {...heroSliderProps}></HeroSlider>
      <AboutInfo {...aboutInfoProps}></AboutInfo>
      <RecentTrips {...recentTripsProps}></RecentTrips>
      <HappyTravelers {...happyTravelersProps}></HappyTravelers>
    </CommonTemplate>
  );
};

export default HomePage;
