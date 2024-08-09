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
      href: "#",
      key: "home",
      name: "Home",
    },
    {
      href: "#",
      key: "about",
      name: "About",
    },
    {
      href: "#",
      key: "blog",
      name: "Blog",
    },
    {
      href: "#",
      key: "services",
      name: "Services",
    },
    {
      href: "#",
      key: "contact us",
      name: "Contact Us",
    },
  ],
};
