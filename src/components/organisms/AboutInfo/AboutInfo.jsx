import "./AboutInfo.css";
import ButtonWithIcon from "../../atoms/buttonWithIcon/ButtonWithIcon";

const AboutInfo = (props) => {
  return (
    <div className="container section-padding">
      <div className="row align-items-center g-4">
        <div className="col-lg-6 ">
          <div className="about-text">
            <h1 className="display-5 fw-bold">{props.label}</h1>
            <p>{props.caption}</p>
            <ButtonWithIcon
              label="Read More"
              type="button"
              className="read-more"
            />
          </div>
        </div>
        <div className="col-lg-6 about-img">
          <img src={props.image} alt={props.alt} />
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
