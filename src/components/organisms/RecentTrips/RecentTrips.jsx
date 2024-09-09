import "./RecentTrips.css";

const RecentTrips = (props) => {
  return (
    <section>
      <div className="container section-padding">
        <div className="row">
          <div className="col-lg-12 text-center trip-title">
            <h1>{props.tripLabel}</h1>
          </div>
          <div className="row">
            {props.tripDetails.map((recentTrip, tripIndex) => (
              <div className="col-lg-4 col-md-6 recent-trip" key={tripIndex}>
                <div className="trip-image mb-2">
                  <img src={recentTrip.tripImg} alt={recentTrip.alt} />
                </div>
                <div className="trip-info">
                  <span>{recentTrip.tripDate}</span>
                </div>
                <a href="#">{recentTrip.tripCaption}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default RecentTrips;