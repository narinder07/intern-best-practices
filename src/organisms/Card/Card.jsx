import "./Card.css";
const Card = (props) => {
  return (
    <section>
      <div className="container section-padding">
        <div className="row g-4">
          {props.cardsInfo.map((cardDetails, cardKey) => (
            <div className="col-lg-4" key={cardKey}>
              <div className="cards-items">
                <img
                  className="card-img"
                  src={cardDetails.cardImages}
                  alt={cardDetails.alt}
                />
                <div className="card-text">
                  <h2 className="text-white">{cardDetails.label}</h2>
                  <p className="text-white">{cardDetails.captionPara}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
