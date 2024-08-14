import InputField from "./InputField";

export default {
  title: "Atoms/InputField",
  component: InputField,
};

const Template = (args) => <InputField {...args}></InputField>;

export const Input = Template.bind({});
Input.args = {
  text: "text",
  value: "",
  placeholder: "Enter The Name",
};
export const Input1 = Template.bind({});
Input1.args = {
  text: "text",
  value: "",
  placeholder: "Enter The Email",
};
