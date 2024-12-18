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
      href: "/",
      name: "Home",
      isActive: true,
    },
    {
      href: "/about",
      name: "About",
      isActive: false,
    },
    {
      href: "/blog",
      name: "Blog",
      isActive: false,
    },
    {
      href: "/services",
      name: "Services",
      isActive: false,
    },
    {
      href: "/contact",
      name: "Contact Us",
      isActive: false,
    },
  ],
};
