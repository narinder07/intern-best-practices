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
    },
    {
      href: "/about",
      name: "About",
    },
    {
      href: "/blog",
      name: "Blog",
    },
    {
      href: "/services",
      name: "Services",
    },
    {
      href: "/contact",
      name: "Contact Us",
    },
  ],
};
