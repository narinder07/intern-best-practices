import "./ListItem.css";

const ListItem = (props) => {
  return (
    <li key={props.key}>
      <a href={props.href}>{props.name}</a>
    </li>
  );
};

export default ListItem;
