import "./MainNavbar.css";
import Logo from "../../atoms/logo/Logo";
import UnOrderList from "../../molecules/UnOrderList/UnOrderList";
import Buttons from "../../../components/atoms/buttons/Buttons";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const MainNavbar = (props) => {
  
  const { isAuthenticated } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();
  const handleClick = (link) => {
    console.log("Button clicked, navigating to:", link);
    navigate(link);
  };
  return (
    <div className="main-nav sticky-top">
      <Logo {...props} />
      <UnOrderList {...props} />
      <div className="button signup-button">
        {isAuthenticated ? <Buttons label="Dashboard" type="button" className="sign-up" onClick={() => handleClick("/dashboard")}></Buttons> :  <Buttons label="Sign Up" type="button" className="sign-up" onClick={() => handleClick("/signup")}></Buttons>}  
       
      </div>
    </div>
  );
};

export default MainNavbar;
