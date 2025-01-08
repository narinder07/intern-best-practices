import TextInputLabelField from "./TextInputLabelField";

export default {
  title: "Molecules/TextInputLabelField",
  component: TextInputLabelField,
};

const Template = (args) => (
  <TextInputLabelField {...args}></TextInputLabelField>
);

export const InputField = Template.bind({});

InputField.args = {
  label: "First Name",
  placeholder: "Enter Your Name",
  name: "name",
  type: "text",
};
