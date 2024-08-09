import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args}></Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

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
