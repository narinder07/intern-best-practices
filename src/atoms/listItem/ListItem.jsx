import "./ListItem.css";

const ListItem = (props) => {
  return (
    <li key={props.key}>
      <a onClick={props.onClick} href={props.href}>
        {props.name}
      </a>
    </li>
  );
};

export default ListItem;
