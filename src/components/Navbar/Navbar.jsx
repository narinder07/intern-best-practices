import "./Navbar.css";
import { MdLocalPhone, MdOutlineEmail } from "react-icons/md";
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { useRef } from "react";
import openNavbar from "../../assets/menu_open.svg";
import closeNavbar from "../../assets/menu_close.svg";

const Navbar = () => {
  // For responsive navbar
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <>
      {/* Top nav start */}
      <div className="top-navbar">
        <div className="connect-right">
          <li className="me-3">
            <Link to="#" target="_blank">
              <MdOutlineEmail className="me-2 social-icons " />
              Example@gmail.com
            </Link>
          </li>
          <li className="me-3">
            <Link to="tel:+919115955017">
              <MdLocalPhone className="me-2 social-icons" />
              +919115955017
            </Link>
          </li>
        </div>
        <div className="connect-left">
          <li className="me-4">
            <Link to="https://www.instagram.com/" target="_blank">
              <IoLogoInstagram className="social-icons" />
            </Link>
          </li>
          <li className="me-4">
            <Link to="https://www.facebook.com/" target="_blank">
              <IoLogoFacebook className="social-icons" />
            </Link>
          </li>
          <li className="me-4">
            <Link to="https://in.linkedin.com/" target="_blank">
              <IoLogoLinkedin className="social-icons" />
            </Link>
          </li>
          <li className="me-4">
            <Link to="#" target="_blank">
              <IoLogoTwitter className="social-icons" />
            </Link>
          </li>
        </div>
      </div>

      {/* Main nav start */}
      <div className="main-nav sticky-top">
        <Link to="/home" className="logo text-white">
          React<span className="logo-style">Project</span>
        </Link>
        <ul className="nav-links" ref={navRef}>
          <li>
            <Link to="/home" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <img src={closeNavbar} className="close-bar" onClick={showNavBar} />
        </ul>

        <img src={openNavbar} className="open-bar" onClick={showNavBar} />
      </div>
    </>
  );
};

export default Navbar;
