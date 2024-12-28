import CommonTemplate from "../../templates/common/CommonTemplate";
import HeaderLinksImages from "../../components/organisms/HeaderLinksImages/HeaderLinksImages";
import { useSelector } from "react-redux";

const ContactUsPage = () => {
  const headerImages = useSelector(
    (state) => state.contactUsPageReducer.headerImagesProps
  );

  return (
    <CommonTemplate>
      <HeaderLinksImages {...headerImages}></HeaderLinksImages>
    </CommonTemplate>
  );
};

export default ContactUsPage;
