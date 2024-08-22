import CommonTemplate from "../templates/common/CommonTemplate";
import SectionsImages from "../organisms/SectionsImages/SectionsImages";
import AboutSectionImg4 from "../assets/about_section_img4.jpg";

const ServicesPage = () => {
  const sectionImagesProps = {
    mainText: "Services",
    mainImg: AboutSectionImg4,
    alt: "About us Image",
  };
  return (
    <CommonTemplate>
      <SectionsImages {...sectionImagesProps}></SectionsImages>
    </CommonTemplate>
  );
};

export default ServicesPage;
