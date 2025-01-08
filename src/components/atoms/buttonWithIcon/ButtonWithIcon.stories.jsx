import ButtonWithIcon from "./ButtonWithIcon";

export default {
  title: "Atoms/ButtonWithIcon",
  component: ButtonWithIcon,
};

const Template = (args) => <ButtonWithIcon {...args}></ButtonWithIcon>;
export const ReadMoreButton = Template.bind({});
ReadMoreButton.args = {
  label: "Read More",
  type: "button",
  className: "read-more",
};
