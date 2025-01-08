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
  linkedin: "https://x.com/?lang=en&mx=2",
  twitter: "http://twitter.com",
  gmailRef:
    "https://mail.google.com/mail/?view=cm&fs=1&to=example@gmail.com&su=Hello&body=This%20is%20a%20test%20email.",
};
