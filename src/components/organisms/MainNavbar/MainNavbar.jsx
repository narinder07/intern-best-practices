import "./MainNavbar.css";
import Logo from "../../atoms/logo/Logo";
import UnOrderList from "../../molecules/UnOrderList/UnOrderList";
import Buttons from "../../../components/atoms/buttons/Buttons";

const MainNavbar = (props) => {
  console.log("MainNavbar props :", props);
  return (
    <div className="main-nav sticky-top">
      <Logo {...props} />
      <UnOrderList {...props} />
      <div className="button signup-button">
        <Buttons label="Sign Up" type="button" className="sign-up"></Buttons>
      </div>
    </div>
  );
};

export default MainNavbar;
