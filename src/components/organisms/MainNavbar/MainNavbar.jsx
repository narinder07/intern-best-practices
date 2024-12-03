import "./MainNavbar.css";
import Logo from "../../atoms/logo/Logo";
import UnOrderList from "../../molecules/UnOrderList/UnOrderList";
import Button from "../../atoms/button/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
        {isAuthenticated ? (
          <Button
            label="Dashboard"
            type="button"
            className="sign-up"
            onClick={() => handleClick("/dashboard")}
          ></Button>
        ) : (
          <Button
            label="Sign Up"
            type="button"
            className="sign-up"
            onClick={() => handleClick("/signup")}
          ></Button>
        )}
      </div>
    </div>
  );
};

export default MainNavbar;
