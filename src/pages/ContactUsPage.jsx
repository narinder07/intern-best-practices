import CommonTemplate from "../templates/common/CommonTemplate";
import Form from "../organisms/Form/Form";

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

  return (
    <CommonTemplate>
      <Form {...formProps}></Form>
    </CommonTemplate>
  );
};

export default ContactUsPage;
