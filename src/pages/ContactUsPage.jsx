import CommonTemplate from "../templates/common/CommonTemplate";
import Form from "../organisms/Form/Form";
import HeaderLinksImages from "../organisms/HeaderLinksImages/HeaderLinksImages";
import sectionImg3 from "../assets/section_img3.jpg";

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
  const headerImagesProps = {
    mainText: "Contact Us",
    mainImg: sectionImg3,
    alt: "About us Image",
  };
  return (
    <CommonTemplate>
      <HeaderLinksImages {...headerImagesProps}></HeaderLinksImages>
      <Form {...formProps}></Form>
    </CommonTemplate>
  );
};

export default ContactUsPage;
