import "./HeaderLinksImages.css";

const HeaderLinksImages = (props) => {
  console.log("HeaderLinksImages props :", props);
  return (
    <section>
      <div className="sections-img">
        <img src={props.mainImg} alt={props.alt} />
        <h1 className="text-white display-4">{props.mainText}</h1>
      </div>
    </section>
  );
};

export default HeaderLinksImages;
