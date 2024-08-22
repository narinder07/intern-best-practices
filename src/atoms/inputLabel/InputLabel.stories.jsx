import InputLabel from "./InputLabel";

export default {
  title: "Atoms/InputLabel",
  component: InputLabel,
};

const Template = (args) => <InputLabel {...args}></InputLabel>;

export const LabelInput = Template.bind({});
LabelInput.args = {
  label: "First Name",
};
