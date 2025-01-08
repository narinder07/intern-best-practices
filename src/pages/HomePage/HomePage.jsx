import CommonTemplate from "../../templates/common/CommonTemplate";
import HeroSlider from "../../components/organisms/HeroSlider/HeroSlider";
import AboutInfo from "../../components/organisms/AboutInfo/AboutInfo";
import RecentTrips from "../../components/organisms/RecentTrips/RecentTrips";
import HappyTravelers from "../../components/organisms/HappyTravelers/HappyTravelers";
import Testimonials from "../../components/organisms/Testimonials/Testimonials";
import TravelWithUs from "../../components/organisms/TravelWithUs/TravelWithUs";
import { useSelector } from "react-redux";

const HomePage = () => {
  const heroSlider = useSelector(
    (state) => state.homePageReducer.heroSliderProps
  );

  const aboutInfo = useSelector(
    (state) => state.homePageReducer.aboutInfoProps
  );

  const recentTrips = useSelector(
    (state) => state.homePageReducer.recentTripsProps
  );

  const happyTravelers = useSelector(
    (state) => state.homePageReducer.happyTravelersProps
  );

  const testimonials = useSelector(
    (state) => state.homePageReducer.testimonialsProps
  );

  const travelWithUs = useSelector(
    (state) => state.homePageReducer.travelWithUsProps
  );

  return (
    <CommonTemplate>
      <HeroSlider {...heroSlider}></HeroSlider>
      <AboutInfo {...aboutInfo}></AboutInfo>
      <RecentTrips {...recentTrips}></RecentTrips>
      <HappyTravelers {...happyTravelers}></HappyTravelers>
      <Testimonials {...testimonials}></Testimonials>
      <TravelWithUs {...travelWithUs}></TravelWithUs>
    </CommonTemplate>
  );
};

export default HomePage;
