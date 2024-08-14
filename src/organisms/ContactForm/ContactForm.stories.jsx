import ContactForm from "./ContactForm";

export default {
  title: "Organisms/ContactForm",
  component: ContactForm,
};

const Template = (args) => <ContactForm {...args}></ContactForm>;

export const Form = Template.bind({});

Form.args = {};
