import Button from "../../atoms/button/Button";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = (props) => {
  const navigate = useNavigate();
  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <div className="container pt-5 ">
      <div className="row align-items-center  g-5">
        <div className="col-lg-6">
          <img
            src={props.pageNotFoundImg}
            className="img-fluid"
            alt={props.alt}
          />
        </div>
        <div className="col-lg-6">
          <h2 className="text display-4 ">{props.pageNotFoundText1}</h2>
          <h4 className="py-3">{props.pageNotFoundText2}</h4>
          <Button
            label="Go To Home"
            onClick={() => handleClick("/")}
            type="button"
            className="go-home"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
