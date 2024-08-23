import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args}></Button>;
export const ReadMoreButton = Template.bind({});
ReadMoreButton.args = {
  label: "Read More",
  type: "button",
  className: "read-more",
};
