import Button from "../../atoms/button/Button";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="container section-padding">
      <div className="row gy-4">
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
                <Button label="Read More" type="button" className="read-more" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
