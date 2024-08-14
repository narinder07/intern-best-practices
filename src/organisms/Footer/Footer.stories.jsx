import Footer from "./Footer";

export default {
  title: "Organisms/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args}></Footer>;

export const FooterSection = Template.bind({});
FooterSection.args = {
  quickLinks: [
    { href: "#", text: "About Us" },
    { href: "#", text: "Contact Us" },
    { href: "#", text: "Our Services" },
    { href: "#", text: "Term & Condition" },
    { href: "#", text: "Support" },
  ],
  services: [
    { href: "#", text: "HTML" },
    { href: "#", text: "CSS" },
    { href: "#", text: "Javascript" },
    { href: "#", text: "Bootstrap" },
    { href: "#", text: "React Js" },
  ],
  label1: "Get In Touch",
  label2: "Quick Links",
  label3: "Services",
  email: "narindersingh00690@gmail.com",
  phone: "+919115955017",
  location: "69 street India",
};
