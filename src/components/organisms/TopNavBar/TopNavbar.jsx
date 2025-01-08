import "./TopNavbar.css";
import Icon from "../../atoms/icon/Icon";

const TopNavbar = (props) => {
  return (
    <nav className="top-navbar">
      <div className="connect-right">
        <Icon
          liClass="me-3"
          class="social-icon"
          iconName="envelope"
          label={props.email}
          href={props.gmailRef}
        ></Icon>
        <Icon
          liClass="me-3"
          class="social-icon"
          iconName="phone"
          label={props.phone}
          href={props.href}
        ></Icon>
      </div>
      <div className="connect-left">
        <Icon
          liClass="me-3"
          class="social-icon"
          iconName="instagram"
          href={props.instagram}
        ></Icon>
        <Icon
          liClass="me-3"
          class="social-icon"
          iconName="facebook"
          href={props.facebook}
        ></Icon>
        <Icon
          liClass="me-3"
          class="social-icon"
          iconName="linkedin"
          href={props.linkedin}
        ></Icon>
        <Icon
          liClass="me-3"
          class="social-icon"
          iconName="twitter"
          href={props.twitter}
        ></Icon>
      </div>
    </nav>
  );
};

export default TopNavbar;
