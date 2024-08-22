import CommonTemplate from "../templates/common/CommonTemplate";
import AboutInfo from "../organisms/AboutInfo/AboutInfo";
import aboutImg from "../assets/about-img.png";
import HeaderLinksImages from "../organisms/HeaderLinksImages/HeaderLinksImages";
import sectionImg2 from "../assets/section_img2.jpg";

const AboutPage = () => {
  const aboutInfoProps = {
    label: "About Us",
    caption:
      "Nature is the biggest reason for our easy survival on this planet. It provides us with food, clothing, and shelter. The sunlight, plants, air, rain, animals, and everything come together to complete nature. It makes our environment liveable and beautiful. It has given life to human beings, and it was present even before the evolution of human beings. It makes a natural cycle for the smooth functioning of every living being on this planet. There is a reason why nature is referred to as “mother”. Mother nature cherishes and nurtures us.",
    image: aboutImg,
    alt: "About us image",
  };
  const headerImagesProps = {
    mainText: "About Us",
    mainImg: sectionImg2,
    alt: "About us Image",
  };

  return (
    <CommonTemplate>
      <HeaderLinksImages {...headerImagesProps}></HeaderLinksImages>
      <AboutInfo {...aboutInfoProps}></AboutInfo>
    </CommonTemplate>
  );
};

export default AboutPage;
