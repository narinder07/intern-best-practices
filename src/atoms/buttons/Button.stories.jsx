import Buttons from "./Buttons";

export default {
  title: "Atoms/Buttons",
  component: Buttons,
};

const Template = (args) => <Buttons {...args}></Buttons>;
export const ReadMoreButton = Template.bind({});
ReadMoreButton.args = {
  label: "Sign Up",
  type: "button",
  className: "sign-up",
};
