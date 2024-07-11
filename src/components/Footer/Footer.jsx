import { Link } from "react-router-dom";
import "./Footer.css";
import { MdOutlineEmail, MdLocalPhone, MdLocationOn } from "react-icons/md";
import {
  IoLogoReact,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
} from "react-icons/io5";
import { FaArrowRightLong, FaBootstrap } from "react-icons/fa6";
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className="footer-bg-color container-fluid py-5">
        <div className="container py-5">
          <div className="row gy-5">
            <div className="col-lg-3 col-md-6">
              <h3 className="footer-heading mb-4">Get In Touch</h3>
              <div className="connect-with-us">
                <li>
                  <Link to="">
                    <MdLocationOn className="me-2 social-icons" />
                    123 Street, Canada
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <MdLocalPhone className="me-2  social-icons" />
                    +919115955017
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <MdOutlineEmail className="me-2  social-icons" />
                    narindersingh0069@gmail.com
                  </Link>
                </li>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="footer-heading mb-4">Services</h3>
              <div className="our-services ">
                <li>
                  <Link to="">
                    <IoLogoHtml5 className="me-2 social-icons" />
                    HTML
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <IoLogoCss3 className="me-2 social-icons" />
                    CSS
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <IoLogoJavascript className="me-2 social-icons" />
                    Javascript
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <FaBootstrap className="me-2 social-icons" />
                    Bootstrap
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <IoLogoReact className="me-2 social-icons" />
                    React Js
                  </Link>
                </li>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="footer-quick-links footer-heading mb-4">
                Quick Links
              </h3>
              <div className="quick-links mt-4">
                <li>
                  <Link to="">
                    <FaArrowRightLong className="me-2 social-icons1" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <FaArrowRightLong className="me-2 social-icons1" />
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <FaArrowRightLong className="me-2 social-icons1" />
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaArrowRightLong className="me-2 social-icons1" />
                    Terms & Condition
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaArrowRightLong className="me-2 social-icons1" />
                    Support
                  </Link>
                </li>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="footer-heading">Get In Touch</h3>
              <div className="sign-up">
                <input
                  type="text"
                  className="mt-4"
                  placeholder="Enter Your Email"
                />
                <button className="sign-up-button">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* copyright section  */}
      <div className="copyRight-footer container-fluid py-4">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4">
              <p className="text-white">
                <span className="text-color">My React Project</span> All right
                reserved.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="social-media">
                <li>
                  <Link to="#"></Link>
                  <IoLogoFacebook className="social-icons me-3" />
                </li>
                <li>
                  <Link to="#"></Link>
                  <IoLogoTwitter className="social-icons me-3" />
                </li>
                <li>
                  <Link to="#"></Link>
                  <IoLogoInstagram className="social-icons me-3" />
                </li>
                <li>
                  <Link to="#"></Link>
                  <IoLogoLinkedin className="social-icons me-3" />
                </li>
              </div>
            </div>
            <div className="col-lg-4">
              <p className="text-white">
                Designed By <span className="text-color">Narinder</span> By
                Using <span className="text-color">React and Bootstrap</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
