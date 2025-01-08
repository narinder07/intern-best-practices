import ContactMe from "./ContactMe";
import address from "../../../assets/address.png";
import phone from "../../../assets/phone.png";
import email from "../../../assets/email.png";

export default {
  title: "Organisms/ContactMe",
  component: ContactMe,
};

const Template = (args) => <ContactMe {...args}></ContactMe>;

export const Contact = Template.bind({});
Contact.args = {
  contact: [
    {
      image: address,
      label: "Address",
      info: "Swaraj Enclave 126 Mohali",
    },
    {
      image: phone,
      label: "Call Us",
      info: "9115955017",
      href: "tel:9115955017",
    },
    {
      image: email,
      label: "Email Us",
      info: "narindersingh00690@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=example@gmail.com&su=Hello&body=This%20is%20a%20test%20email.",
    },
  ],
};
