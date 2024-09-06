import CommonTemplate from "../../templates/common/CommonTemplate";
import HeaderLinksImages from "../../components/organisms/HeaderLinksImages/HeaderLinksImages";
import PopularPlaces from "../../components/organisms/PopularPlaces/PopularPlaces";

import { useSelector } from "react-redux";

const ServicesPage = () => {
  const headerImages = useSelector(
    (state) => state.servicesPageReducer.headerImagesProps
  );

  const popularPlaces = useSelector(
    (state) => state.servicesPageReducer.popularPlacesProps
  );

  return (
    <CommonTemplate>
      <HeaderLinksImages {...headerImages}></HeaderLinksImages>
      <PopularPlaces {...popularPlaces}></PopularPlaces>
    </CommonTemplate>
  );
};

export default ServicesPage;
