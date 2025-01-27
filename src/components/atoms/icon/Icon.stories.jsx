import Icon from "./Icon";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Icon",
  component: Icon,
};

const Template = (args) => <Icon {...args}></Icon>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WebIcons = Template({});
WebIcons.args = {
  label: "Example@gmail.com",
  iconName: "house",
  ClassName: "icon",
  href: "#",
};
