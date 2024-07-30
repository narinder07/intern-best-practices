import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button",
  component: Button,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ButtonBlue = {
  args: {
    label: "Buy Now",
    type: "button",
    className: "primary-blue",
  },
};

export const ButtonWhite = {
  args: {
    label: "Buy Now",
    type: "button",
    className: "primary-white",
  },
};

export const ButtonBlack = {
  args: {
    label: "Buy Now",
    type: "button",
    className: "primary-black",
  },
};
