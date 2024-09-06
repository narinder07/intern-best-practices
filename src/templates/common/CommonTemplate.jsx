import MainNavbar from "../../organisms/Main Navbar/MainNavbar";
import TopNavbar from "../../organisms/TopNavBar/TopNavbar";
import Footer from "../../organisms/Footer/Footer";
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
