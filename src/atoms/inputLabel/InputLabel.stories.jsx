import InputLabel from "./InputLabel";

export default {
  title: "Atoms/InputLabel",
  component: InputLabel,
};

const Template = (args) => <InputLabel {...args}></InputLabel>;

export const Label = Template.bind({});
Label.args = {
  label: "Enter First Name",
};
