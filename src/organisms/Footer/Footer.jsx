import "./Footer.css";
import Icon from "../../atoms/icon/Icon";
import InputField from "../../atoms/inputField/InputField";
import Buttons from "../../atoms/buttons/Buttons";

const Footer = (props) => {
  return (
    <footer className="footer-bg-color">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h3 className="mb-4">{props.label1}</h3>
            <div className="get-in-touch ">
              <Icon
                liClass="me-3"
                class="social-icon"
                iconName="map"
                label={props.location}
              ></Icon>
              <Icon
                liClass="me-3"
                class="social-icon"
                iconName="phone"
                label={props.phone}
              ></Icon>
              <Icon
                liClass="me-3"
                class="social-icon"
                iconName="envelope"
                label={props.email}
              ></Icon>
            </div>
          </div>
          <div className="col-lg-3 footer-quick-links">
            <h3 className="mb-4">{props.label2}</h3>
            {props.quickLinks.map((links, linksIndex) => (
              <li key={linksIndex}>
                <a href={links.href}>{links.text}</a>
              </li>
            ))}
          </div>
          <div className="col-lg-3 footer-service-links">
            <h3 className="mb-4">{props.label3}</h3>
            {props.services.map((links, linksIndex) => (
              <li key={linksIndex}>
                <a href={links.href}>{links.text}</a>
              </li>
            ))}
          </div>
          <div className="col-lg-3">
            <h3 className="mb-4">{props.label1}</h3>
            <InputField text="text" value="" placeholder="Enter The Email" />
            <Buttons label="Sign Up" type="button" className="sign-up" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
