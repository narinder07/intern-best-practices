import { MdLocalPhone, MdOutlineEmail, MdLocationOn } from "react-icons/md";
import "./ContactMessage.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const ContactMessage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });
  const [formError, setFormError] = useState({});

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    var nameCheck = /^[A-Za-z. ]{0,20}$/;
    var emailCheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    const validationErrors = {};
    if (!formData.firstName) {
      validationErrors.firstName = "Name is required";
    } else if (formData.firstName.length <= 2) {
      validationErrors.firstName = "Name length must be 3 characters";
    } else if (!formData.firstName.match(nameCheck)) {
      validationErrors.firstName = "Please enter correct name";
    }
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!formData.email.match(emailCheck)) {
      validationErrors.email = "Please check your email";
    }
    if (!formData.message) {
      validationErrors.message = "Message is required";
    }

    setFormError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Message is submit");
    }
  };

  return (
    <div className="contact-bg container-fluid ">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 col-md-6 col-12">
            <h1 className="contact-heading fw-light display-4">Let's talk</h1>
            <p className="contact-para text-white text-light">
              I'm currently available to take on new project ,so fell free to
              send me a message about anything that you want me to work on.you
              can contact me
            </p>
            <div className="contact-me mt-5">
              <li>
                <MdOutlineEmail className="me-2 social-icons" />
                <Link to="#">narindersingh0069@gmail.com</Link>
              </li>
              <li>
                <MdLocalPhone className="me-2 social-icons" />
                <Link to="#">9115955017</Link>
              </li>
              <li>
                <MdLocationOn className="me-2 social-icons" />
                <Link to="#">Mohali sector 126</Link>
              </li>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <label className="text-white" htmlFor="">
                Your Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter Your Name"
                onChange={handleChangeInput}
              />
              {formError.firstName && (
                <span className="text-danger">{formError.firstName}</span>
              )}
              <label className="text-white" htmlFor="">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                onChange={handleChangeInput}
              />
              {formError.email && (
                <span className="text-danger">{formError.email}</span>
              )}
              <label className="text-white" htmlFor="">
                Write Your Message
              </label>
              <textarea
                rows="4"
                name="message"
                placeholder="Enter Your Message"
                onChange={handleChangeInput}
              ></textarea>
              {formError.message && (
                <span className="text-danger">{formError.message}</span>
              )}
              <div className="submit-btn">
                <button>Submit Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMessage;
