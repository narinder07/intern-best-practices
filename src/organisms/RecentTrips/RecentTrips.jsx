import "./RecentTrips.css";

export const RecentTrips = (props) => {
  const recentTripsProps = props.props;

  return (
    <section>
      <div className="container section-padding">
        <div className="row">
          <div className="col-lg-12 text-center trip-title">
            <h1>{recentTripsProps.tripLabel}</h1>
          </div>
          <div className="row">
            {recentTripsProps.tripDetails.map((recentTrip, tripIndex) => (
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
