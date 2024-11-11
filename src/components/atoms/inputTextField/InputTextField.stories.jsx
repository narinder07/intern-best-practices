import InputTextField from "./InputTextField";

export default {
  title: "Atoms/InputTextField",
  component: InputTextField,
};

const Template = (args) => <InputTextField {...args}></InputTextField>;

export const Input1 = Template.bind({});
Input1.args = {
  placeholder: "Enter Your Name",
  name: "name",
  type: "text",
};
