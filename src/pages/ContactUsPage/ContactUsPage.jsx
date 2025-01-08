import CommonTemplate from "../../templates/common/CommonTemplate";
import HeaderLinksImages from "../../components/organisms/HeaderLinksImages/HeaderLinksImages";
import ContactMe from "../../components/organisms/contactMe/ContactMe";
import { useSelector } from "react-redux";

const ContactUsPage = () => {
  const headerImages = useSelector(
    (state) => state.contactUsPageReducer.headerImagesProps
  );
  const contactMe = useSelector(
    (state) => state.contactUsPageReducer.contactMeProps
  );

  return (
    <CommonTemplate>
      <HeaderLinksImages {...headerImages}></HeaderLinksImages>
      <ContactMe {...contactMe}></ContactMe>
    </CommonTemplate>
  );
};

export default ContactUsPage;
