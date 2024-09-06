import Form from "./Form";

export default {
  title: "Organisms/Form",
  component: Form,
};

const Template = (args) => <Form {...args}></Form>;

export const FormTemplate = Template.bind({});

FormTemplate.args = {
  formHeading: "Contact Us",
  formTitle: "Get In Touch With Us",
  email: "narindersingh0069@gmail.com",
  phone: "+919115955017",
  location: "69 Street India",
  facebook: "http://facebook.com",
  instagram: "http://instagram.com",
  linkedin: "https://x.com/?lang=en&mx=2",
  twitter: "http://twitter.com",
};
