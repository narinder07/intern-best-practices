import "./TravelWithUs.css";

const TravelWithUs = (props) => {
  return (
    <section className="bg-light py-5 section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 travel-with-us ">
            <h1>{props.TravelCaption}</h1>
            <a href="/signup">{props.bookNow}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelWithUs;
