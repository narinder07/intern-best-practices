import Label from "./Label";

export default {
  title: "Atoms/Label",
  component: Label,
};

const Template = (args) => <Label {...args}></Label>;

export const LabelInput = Template.bind({});
LabelInput.args = {
  label: "First Name",
};
