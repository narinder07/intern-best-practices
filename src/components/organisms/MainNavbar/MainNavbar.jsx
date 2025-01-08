import "./MainNavbar.css";
import Logo from "../../atoms/logo/Logo";
import UnOrderList from "../../molecules/UnOrderList/UnOrderList";
import Button from "../../atoms/button/Button";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Icon from "../../atoms/icon/Icon";
import { toggleNavbar } from "../../../redux/ToggleSlice";

const MainNavbar = (props) => {
  const { isAuthenticated } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (link) => {
    navigate(link);
  };

  // for responsive navbar
  const showMenuLinks = useSelector((state) => state.toggleReducer.showNavbar);
  const toggleMenuLinks = () => {
    dispatch(toggleNavbar());
  };

  return (
    <>
      <div className="main-nav sticky-top">
        <Logo {...props} />
        <UnOrderList
          {...props}
          showMenuLinks={showMenuLinks}
          onClick={toggleMenuLinks}
        />
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
          <Button
            label="Log In"
            type="button"
            onClick={() => handleClick("/login")}
            className="login-btn"
          />
          <div className="hamburger">
            {showMenuLinks ? (
              <Icon
                iconName="close"
                onClick={toggleMenuLinks}
                ClassName="icon"
              />
            ) : (
              <Icon
                iconName="bars"
                onClick={toggleMenuLinks}
                ClassName="icon"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavbar;
