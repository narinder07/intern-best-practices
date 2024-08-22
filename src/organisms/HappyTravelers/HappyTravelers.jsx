import "./HappyTravelers.css";

const HappyTravelers = (props) => {
  return (
    <section className="happy-traveler-bg section-padding">
      <div className="container ">
        <div className="row text-center">
          <div className="col-12 travel-heading ">
            <h1>{props.travelHeading}</h1>
            <p>{props.travelPara}</p>
          </div>
        </div>
        <div className="row text-center">
          {props.happyTravel.map((travelInfo, travelIndex) => (
            <div className="col-lg-3 col-md-6" key={travelIndex}>
              <div className="travel-details">
                <span>{travelInfo.travelNumbers}</span>
                <p>{travelInfo.travelTours}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyTravelers;
