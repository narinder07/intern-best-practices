import "./SectionsImages.css";

const SectionsImages = (props) => {
  return (
    <section>
      <div className="sections-img">
        <img src={props.mainImg} alt={props.alt} />
        <h1 className="text-white">{props.mainText}</h1>
      </div>
    </section>
  );
};

export default SectionsImages;
