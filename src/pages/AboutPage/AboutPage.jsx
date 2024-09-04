import CommonTemplate from "../../templates/common/CommonTemplate";
import AboutInfo from "../../organisms/AboutInfo/AboutInfo";
import HeaderLinksImages from "../../organisms/HeaderLinksImages/HeaderLinksImages";
import { useSelector } from "react-redux";

const AboutPage = () => {
  const headerImages = useSelector(
    (state) => state.aboutPageReducer.headerImagesProps
  );

  const aboutInfo = useSelector(
    (state) => state.aboutPageReducer.aboutInfoProps
  );

  return (
    <CommonTemplate>
      <HeaderLinksImages {...headerImages}></HeaderLinksImages>
      <AboutInfo {...aboutInfo}></AboutInfo>
    </CommonTemplate>
  );
};

export default AboutPage;
