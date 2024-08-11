import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args}></Button>;
export const ButtonBlue = Template.bind({});
ButtonBlue.args = {
  label: "Buy Now",
  type: "button",
  className: "primary-blue",
};

export const ButtonWhite = Template.bind({});
ButtonWhite.args = {
  label: "Buy Now",
  type: "button",
  className: "primary-white",
};

export const ButtonBlack = Template.bind({});
ButtonBlack.args = {
  label: "Buy Now",
  type: "button",
  className: "primary-black",
};

export const ReadMoreButton = Template.bind({});
ReadMoreButton.args = {
  label: "Read More",
  type: "button",
  className: "read-more",
};
