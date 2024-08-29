import InputField from "./InputField";

export default {
  title: "Atoms/InputField",
  component: InputField,
};

const Template = (args) => <InputField {...args}></InputField>;

export const Input1 = Template.bind({});
Input1.args = {
  type: "text",
  placeholder: "Enter Your Name",
  name: "first name",
};
