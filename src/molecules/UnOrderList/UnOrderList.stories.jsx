import UnOrderList from "../../molecules/UnOrderList/UnOrderList";

export default {
  title: "Molecules/UnOrderList",
  component: UnOrderList,
};

const Template = (args) => <UnOrderList {...args}></UnOrderList>;

export const MenuLinks = Template.bind({});
MenuLinks.args = {
  menuItems: [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/about",
      name: "About",
    },
  ],
  classes: "nav-links",
};
