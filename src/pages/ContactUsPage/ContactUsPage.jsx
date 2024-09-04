import CommonTemplate from "../../templates/common/CommonTemplate";
import Form from "../../organisms/Form/Form";
import HeaderLinksImages from "../../organisms/HeaderLinksImages/HeaderLinksImages";
import { useSelector } from "react-redux";

const ContactUsPage = () => {
  const headerImages = useSelector(
    (state) => state.contactUsPageReducer.headerImagesProps
  );

  const form = useSelector((state) => state.contactUsPageReducer.formProps);

  return (
    <CommonTemplate>
      <HeaderLinksImages {...headerImages}></HeaderLinksImages>
      <Form {...form}></Form>
    </CommonTemplate>
  );
};

export default ContactUsPage;
