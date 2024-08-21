import "./AboutInfo.css";
import Button from "../../atoms/button/Button";

const AboutInfo = (props) => {
  const aboutInfoProps = props.props;
  return (
    <section>
      <div className="container section-padding">
        <div className="row align-items-center g-4">
          <div className="col-lg-6 ">
            <div className="about-text">
              <h1 className="display-5 fw-bold">{aboutInfoProps.label}</h1>
              <p>{aboutInfoProps.caption}</p>
              <Button label="Read More" type="button" className="read-more" />
            </div>
          </div>
          <div className="col-lg-6 about-img">
            <img src={aboutInfoProps.image} alt={aboutInfoProps.alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
