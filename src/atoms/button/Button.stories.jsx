import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button",
  component: Button,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Button1 = {
  args: {
    label: "Buy Now",
    type: "button",
    className: "primary-custom1",
  },
};

export const Button2 = {
  args: {
    label: "Button",
    className: "primary-custom2",
  },
};

export const Button3 = {
  args: {
    size: "large",
    label: "Button",
    className: "primary-custom3",
  },
};
