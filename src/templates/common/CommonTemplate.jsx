import MainNavbar from "../../components/organisms/MainNavbar/MainNavbar";
import TopNavbar from "../../components/organisms/TopNavBar/TopNavbar";
import Footer from "../../components/organisms/Footer/Footer";
import { useSelector } from "react-redux";

const CommonTemplate = (props) => {
  const topNavBar = useSelector(
    (state) => state.commonTemplateReducer.topNavBarProps
  );
  const mainNavBar = useSelector(
    (state) => state.commonTemplateReducer.mainNavBarProps
  );
  const footer = useSelector(
    (state) => state.commonTemplateReducer.footerProps
  );

  return (
    <>
      <TopNavbar {...topNavBar}></TopNavbar>
      <MainNavbar {...mainNavBar}></MainNavbar>
      {props.children}
      <Footer {...footer}></Footer>
    </>
  );
};

export default CommonTemplate;
