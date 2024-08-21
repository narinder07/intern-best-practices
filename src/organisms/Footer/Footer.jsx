import "./Footer.css";
import Icon from "../../atoms/icon/Icon";
import SignUp from "../../molecules/SignUp/SignUp";

const Footer = (props) => {
  const footerProps = props.props;

  return (
    <>
      {/* Top footer */}
      <footer className="footer-bg-color py-5">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-3 col-md-6">
              <h3 className="mb-4 text-white">{footerProps.label1}</h3>
              <div className="get-in-touch ">
                <Icon
                  liClass="me-3"
                  class="social-icon"
                  iconName="map"
                  label={footerProps.location}
                ></Icon>
                <Icon
                  liClass="me-3"
                  class="social-icon"
                  iconName="phone"
                  label={footerProps.phone}
                ></Icon>
                <Icon
                  liClass="me-3"
                  class="social-icon"
                  iconName="envelope"
                  label={footerProps.email}
                ></Icon>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-quick-links">
              <h3 className="mb-4 text-white">{footerProps.label2}</h3>
              {footerProps.quickLinks.map((links, linksIndex) => (
                <li key={linksIndex}>
                  <a href={links.href}>{links.text}</a>
                </li>
              ))}
            </div>
            <div className="col-lg-3 col-md-6 footer-service-links">
              <h3 className="mb-4 text-white">{footerProps.label3}</h3>
              {footerProps.services.map((links, linksIndex) => (
                <li key={linksIndex}>
                  <a href={links.href}>{links.text}</a>
                </li>
              ))}
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="mb-4 text-white">{footerProps.label1}</h3>
              <SignUp
                buttonText="Sign Up"
                placeholder="Enter Your Email"
                type="text"
              />
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
                <span className={footerProps.copyrightSpanStyle}>
                  {footerProps.copyrightSpan1}
                </span>
                {footerProps.copyrightText1}
              </p>
            </div>
            <div className="col-lg-4">
              <div className="social-media">
                <Icon
                  liClass="me-3"
                  class="social-icon"
                  iconName="instagram"
                  href={footerProps.instagram}
                ></Icon>
                <Icon
                  liClass="me-3"
                  class="social-icon"
                  iconName="facebook"
                  href={footerProps.facebook}
                ></Icon>
                <Icon
                  liClass="me-3"
                  class="social-icon"
                  iconName="linkedin"
                  href={footerProps.linkedin}
                ></Icon>
                <Icon
                  liClass="me-3"
                  class="social-icon"
                  iconName="twitter"
                  href={footerProps.twitter}
                ></Icon>
              </div>
            </div>
            <div className="col-lg-4">
              <p className="text-white">
                {footerProps.copyrightText2}
                <span className={footerProps.copyrightSpanStyle}>
                  {footerProps.copyrightSpan2}
                </span>
                {footerProps.copyrightText3}
                <span className={footerProps.copyrightSpanStyle}>
                  {footerProps.copyrightText4}
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
