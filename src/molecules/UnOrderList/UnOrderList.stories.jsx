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
      href: "#",
      key: "home",
      name: "Home",
    },
    {
      href: "#",
      key: "about",
      name: "About",
    },
  ],
  classes: "nav-links",
};
