import "./Footer.css";
import Icon from "../../atoms/icon/Icon";

const Footer = (props) => {
  return (
    <>
      {/* Top footer */}
      <footer className="footer-bg-color py-5">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-3 col-md-6">
              <h3 className="mb-4 text-white">{props.label1}</h3>
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
            <div className="col-lg-3 col-md-6 footer-quick-links">
              <h3 className="mb-4 text-white">{props.label2}</h3>
              {props.quickLinks.map((links, linksIndex) => (
                <li key={linksIndex}>
                  <a href={links.href}>{links.text}</a>
                </li>
              ))}
            </div>
            <div className="col-lg-3 col-md-6 footer-service-links">
              <h3 className="mb-4 text-white">{props.label3}</h3>
              {props.services.map((links, linksIndex) => (
                <li key={linksIndex}>
                  <a href={links.href}>{links.text}</a>
                </li>
              ))}
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="mb-4 text-white">{props.label1}</h3>
            </div>
          </div>
        </div>
      </footer>
      {/* Copyright footer */}
      <footer className="copyright-footer">
        <div className="container py-5">
          <div className="row gy-4">
            <div className="col-lg-4">
              <p className="text-white">
                <span className={props.copyrightSpanStyle}>
                  {props.copyrightSpan1}
                </span>
                {props.copyrightText1}
              </p>
            </div>
            <div className="col-lg-4">
              <div className="social-media">
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
            </div>
            <div className="col-lg-4">
              <p className="text-white">
                {props.copyrightText2}
                <span className={props.copyrightSpanStyle}>
                  {props.copyrightSpan2}
                </span>
                {props.copyrightText3}
                <span className={props.copyrightSpanStyle}>
                  {props.copyrightText4}
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
