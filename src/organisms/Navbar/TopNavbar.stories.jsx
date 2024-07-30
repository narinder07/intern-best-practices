import TopNavbar from "./TopNavbar";

export default {
  title: "Organisms/TopNavbar",
  component: TopNavbar,
};

const Template = (args) => <TopNavbar {...args}></TopNavbar>;

export const TopNavbarIcons = Template.bind();
TopNavbarIcons.args = {
  phone: "+919876543210",
  email: "demo@gmail.com",
  facebook: "http://facebook.com",
  instagram: "http://instagram.com",
  linkedin: "http://lindedin.com",
  twitter: "http://twitter.com",
};
