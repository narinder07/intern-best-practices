import FormField from "./FormField";

export default {
  title: "Molecules/FormField",
  component: FormField,
};

const Template = (args) => <FormField {...args}></FormField>;

export const InputField = Template.bind({});

InputField.args = {
  label: "First Name",
  placeholder: "Enter Your Name",
  type: "text",
  name: "name",
};
