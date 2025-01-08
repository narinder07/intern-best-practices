import "./PopularPlaces.css";

const PopularPlaces = (props) => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row text-center ">
          <div className="col-lg-12 places py-3">
            <h1>{props.placesHeading}</h1>
            <p>{props.placesPara}</p>
          </div>
          <div className="row">
            {props.placesInfo.map((places, placesIndex) => (
              <div className="col-lg-4 col-md-6  g-4 " key={placesIndex}>
                <div className="placesInformation">
                  <img src={places.placesImg} alt={places.alt} />
                  <div className="placesTitle">
                    <h4>{places.placesName}</h4>
                    <a href="#">{places.noOfPlaces}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularPlaces;
