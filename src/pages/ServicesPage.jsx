import CommonTemplate from "../templates/common/CommonTemplate";
import HeaderLinksImages from "../organisms/HeaderLinksImages/HeaderLinksImages";
import sectionImg4 from "../assets/section_img4.jpg";
import PopularPlaces from "../organisms/PopularPlaces/PopularPlaces";
import india from "../assets/india.png";
import italy from "../assets/italy.png";
import brazil from "../assets/brazil.png";
import america from "../assets/america.png";
import maldives from "../assets/maldives.png";
import indonesia from "../assets/indonesia.png";

const ServicesPage = () => {
  const headerImagesProps = {
    mainText: "Services",
    mainImg: sectionImg4,
    alt: "About us Image",
  };

  const popularPlacesProps = {
    placesHeading: "Popular Destination",
    placesPara:
      "We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures we can have if only we seek them with our eyes open",
    placesInfo: [
      {
        placesImg: india,
        placesName: "India",
        noOfPlaces: "23 Places",
        alt: "Places images",
      },
      {
        placesImg: italy,
        placesName: "Italy",
        noOfPlaces: "15 Places",
        alt: "Places images",
      },
      {
        placesImg: america,
        placesName: "America",
        noOfPlaces: "23 Places",
        alt: "Places images",
      },
      {
        placesImg: maldives,
        placesName: "Maldives",
        noOfPlaces: "21 Places",
        alt: "Places images",
      },
      {
        placesImg: indonesia,
        placesName: "Indonesia",
        noOfPlaces: "17 Places",
        alt: "Places images",
      },
      {
        placesImg: brazil,
        placesName: "Brazil",
        noOfPlaces: "13 Places",
        alt: "Places images",
      },
    ],
  };

  return (
    <CommonTemplate>
      <HeaderLinksImages {...headerImagesProps}></HeaderLinksImages>
      <PopularPlaces {...popularPlacesProps}></PopularPlaces>
    </CommonTemplate>
  );
};

export default ServicesPage;
