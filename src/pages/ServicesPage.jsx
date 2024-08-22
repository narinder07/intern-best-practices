import CommonTemplate from "../templates/common/CommonTemplate";
import HeaderLinksImages from "../organisms/HeaderLinksImages/HeaderLinksImages";
import sectionImg4 from "../assets/section_img4.jpg";

const ServicesPage = () => {
  const headerImagesProps = {
    mainText: "Services",
    mainImg: sectionImg4,
    alt: "About us Image",
  };
  return (
    <CommonTemplate>
      <HeaderLinksImages {...headerImagesProps}></HeaderLinksImages>
    </CommonTemplate>
  );
};

export default ServicesPage;
