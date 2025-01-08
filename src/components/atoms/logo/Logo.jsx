import "./Logo.css";

const Logo = (props) => {
  return (
    <a className={props.labelStyle} href={props.href}>
      {props.label}
    </a>
  );
};

export default Logo;
