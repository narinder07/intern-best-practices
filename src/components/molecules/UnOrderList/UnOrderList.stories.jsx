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
      isActive: true,
    },
    {
      href: "/about",
      name: "About",
      isActive: false,
    },
  ],
  classes: "nav-links",
};
