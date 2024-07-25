import { ClassNames } from "storybook/internal/theming";
import Icon from "./Icon";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Icon",
  component: Icon,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const View = {
  args: {
    label: "durgadp16@gmail.com",
    iconName: "house",
  },
};
