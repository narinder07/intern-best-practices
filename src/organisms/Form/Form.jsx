import "./Form.css";
import Icon from "../../atoms/icon/Icon";
import FormField from "../../molecules/FormField/FormField";
import Button from "../../atoms/buttons/Buttons";

const Form = (props) => {
  return (
    <div className="container section-padding">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="form-content">
            <h3 className="mb-3">{props.formHeading}</h3>
            <h1 className="mb-3">{props.formTitle}</h1>
            <p className="mb-5">{props.formPara}</p>
            <div className="social-links">
              <div className="social-bg-color">
                <Icon
                  liClass="me-4"
                  class="social-icon"
                  iconName="envelope"
                  label={props.email}
                ></Icon>
              </div>
              <div className="social-bg-color">
                <Icon
                  liClass="me-4"
                  class="social-icon"
                  iconName="phone"
                  label={props.phone}
                ></Icon>
              </div>
              <div className="social-bg-color">
                <Icon
                  liClass="me-4"
                  class="social-icon"
                  iconName="map"
                  label={props.location}
                ></Icon>
              </div>
            </div>
          </div>
          <div className="social-media-icons py-3 bg-light">
            <Icon
              liClass="me-2"
              class="social-icon"
              iconName="instagram"
              href={props.instagram}
            ></Icon>
            <Icon
              liClass="me-2"
              class="social-icon"
              iconName="facebook"
              href={props.facebook}
            ></Icon>
            <Icon
              liClass="me-2"
              class="social-icon"
              iconName="linkedin"
              href={props.linkedin}
            ></Icon>
            <Icon
              liClass="me-2"
              class="social-icon"
              iconName="twitter"
              href={props.twitter}
            ></Icon>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="bg-light p-5">
            <form>
              <div className="row ">
                <div className="col-lg-6 g-4">
                  <FormField
                    label="First Name"
                    placeholder="Enter Your First Name"
                    type="text"
                  ></FormField>
                </div>
                <div className="col-lg-6 g-4">
                  <FormField
                    label="Last Name"
                    placeholder="Enter Your Last Name"
                    type="text"
                  ></FormField>
                </div>
                <div className="col-lg-6 g-4">
                  <FormField
                    label="Phone Number"
                    placeholder="Enter Your Phone Number "
                    type="text"
                  ></FormField>
                </div>
                <div className="col-lg-6 g-4">
                  <FormField
                    label="Email Address"
                    placeholder="Enter Your Email Address"
                    type="text"
                  ></FormField>
                </div>
              </div>
              <div className="col-12 mt-5">
                <Button
                  label="Submit"
                  type="button"
                  className="submit-btn"
                ></Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
