import "./Hero.css";
import reactImage from "../../assets/react.png";

const Hero = () => {
  return (
    <>
      <section className="hero-section container-fluid">
        <div className="container">
          <div className="row hero-title ">
            <div className="col-lg-6">
              <h1 className="text-white display-2 ">
                To <span className="text-color1 fw-lighter">Succeed</span> We
                Must First Believe
                <span className="text-color1">That We Can</span>
              </h1>
            </div>
            <div className="col-lg-6 react-img ">
              <img
                src={reactImage}
                alt="React image"
                className="img-fluid react-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
