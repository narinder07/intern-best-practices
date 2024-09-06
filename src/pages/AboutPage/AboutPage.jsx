import CommonTemplate from "../../templates/common/CommonTemplate";
import AboutInfo from "../../components/organisms/AboutInfo/AboutInfo";
import HeaderLinksImages from "../../components/organisms/HeaderLinksImages/HeaderLinksImages";
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
