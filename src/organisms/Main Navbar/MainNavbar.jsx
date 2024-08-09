import "./MainNavbar.css";
import Logo from "../../atoms/logo/Logo";
import UnOrderList from "../../molecules/UnOrderList/UnOrderList";

const MainNavbar = (props) => {
  return (
    <div className="main-nav sticky-top">
      <Logo {...props} />
      <UnOrderList {...props} />
    </div>
  );
};

export default MainNavbar;
