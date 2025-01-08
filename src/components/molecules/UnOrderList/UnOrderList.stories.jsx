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
      to: "/",
      name: "Home",
      isActive: true,
    },
    {
      to: "/about",
      name: "About",
      isActive: false,
    },
  ],
  classes: "nav-links",
};
