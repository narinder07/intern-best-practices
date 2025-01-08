import MainNavbar from "./MainNavbar";

export default {
  title: "Organisms/MainNavbar",
  component: MainNavbar,
};

const Template = (args) => <MainNavbar {...args}></MainNavbar>;

export const WebMainNavbar = Template.bind({});
WebMainNavbar.args = {
  label: "ReactProject",
  href: "#",
  labelStyle: "logo-style",
  classes: "nav-links",
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
    {
      to: "/blog",
      name: "Blog",
      isActive: false,
    },
    {
      to: "/services",
      name: "Services",
      isActive: false,
    },
    {
      to: "/contact",
      name: "Contact Us",
      isActive: false,
    },
  ],
};
