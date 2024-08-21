import "./TopNavbar.css";
import Icon from "../../atoms/icon/Icon";

const TopNavbar = (props) => {
  const topNavBarProps = props.props;

  return (
    <nav className="top-navbar">
      <div className="connect-right">
        <Icon
          liClass="me-3"
          class="social-icon"
          iconName="envelope"
          label={topNavBarProps.email}
        ></Icon>
        <Icon
          liClass="me-3"
          class="social-icon"
          iconName="phone"
          label={topNavBarProps.phone}
          href={topNavBarProps.href}
        ></Icon>
      </div>
      <div className="connect-left">
        <Icon
          liClass="me-3"
          class="social-icon"
          iconName="instagram"
          href={topNavBarProps.instagram}
        ></Icon>
        <Icon
          liClass="me-3"
          class="social-icon"
          iconName="facebook"
          href={topNavBarProps.facebook}
        ></Icon>
        <Icon
          liClass="me-3"
          class="social-icon"
          iconName="linkedin"
          href={topNavBarProps.linkedin}
        ></Icon>
        <Icon
          liClass="me-3"
          class="social-icon"
          iconName="twitter"
          href={topNavBarProps.twitter}
        ></Icon>
      </div>
    </nav>
  );
};

export default TopNavbar;
