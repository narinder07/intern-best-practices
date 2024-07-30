import ListItem from "../../atoms/listItem/ListItem";
import UnOrderList from "./UnOrderList";

export default {
  title: "Molecules/UnOrderList",
  component: UnOrderList,
};

const handleClick = (event) => {
  event.preventDefault();
  console.log("event :", event);
  alert("Button clicked!");
};

const Template = (args) => (
  <UnOrderList {...args}>
    <ListItem href="#" key="home" name="Home" onClick={handleClick}></ListItem>
    <ListItem
      href="#"
      key="about"
      name="About"
      onClick={handleClick}
    ></ListItem>
    <ListItem href="#" key="blog" name="Blog" onClick={handleClick}></ListItem>
    <ListItem
      href="#"
      key="services"
      name="Services"
      onClick={handleClick}
    ></ListItem>
    <ListItem
      href="#"
      key="contact-us"
      name="Contact Us"
      onClick={handleClick}
    ></ListItem>
  </UnOrderList>
);

export const MenuBar = Template.bind({});
MenuBar.args = {
  classes: "ul-custom",
};
