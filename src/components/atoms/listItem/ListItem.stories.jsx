import ListItem from "./ListItem";

export default {
  title: "Atoms/ListItems",
  component: ListItem,
};

const Template = (args) => <ListItem {...args} />;

export const HomeTab = Template.bind({});
HomeTab.args = {
  href: "/",
  name: "Home",
  classes: "list-items",
};
