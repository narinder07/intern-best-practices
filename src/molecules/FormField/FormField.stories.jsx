import FormField from "./FormField";

export default {
  title: "Molecules/FormField",
  component: FormField,
};

const Template = (args) => <FormField {...args}></FormField>;
export const InputField = Template.bind({});

InputField.args = {
  type: "text",
  placeholder: "Enter Your Name",
  label: "Your Name",
};
