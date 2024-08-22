import CommonTemplate from "../templates/common/CommonTemplate";
import Form from "../organisms/Form/Form";
import SectionsImages from "../organisms/SectionsImages/SectionsImages";
import AboutSectionImg3 from "../assets/about_section_img3.jpg";

const ContactUsPage = () => {
  const formProps = {
    formHeading: "Contact Us",
    formTitle: "Get In Touch With Us",
    formPara: "Join me on my journey—let's explore the world together",
    email: "narindersingh0069@gmail.com",
    phone: "+919115955017",
    location: "69 Street India",
    facebook: "http://facebook.com",
    instagram: "http://instagram.com",
    linkedin: "https://x.com/?lang=en&mx=2",
    twitter: "http://twitter.com",
  };
  const sectionImagesProps = {
    mainText: "Contact Us",
    mainImg: AboutSectionImg3,
    alt: "About us Image",
  };
  return (
    <CommonTemplate>
      <SectionsImages {...sectionImagesProps}></SectionsImages>
      <Form {...formProps}></Form>
    </CommonTemplate>
  );
};

export default ContactUsPage;
