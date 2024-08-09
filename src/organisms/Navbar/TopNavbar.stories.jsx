import TopNavbar from "./TopNavbar";

export default {
  title: "Organisms/TopNavbar",
  component: TopNavbar,
};

const Template = (args) => <TopNavbar {...args}></TopNavbar>;

export const WebTopNavbar = Template.bind();
WebTopNavbar.args = {
  phone: "+919115955017",
  href: "tel:9115955017",
  email: "narindersingh00690@gmail.com",
  facebook: "http://facebook.com",
  instagram: "http://instagram.com",
  linkedin: "http://lindedin.com",
  twitter: "http://twitter.com",
};
