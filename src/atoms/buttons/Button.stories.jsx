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

export const SubmitButton = Template.bind({});
SubmitButton.args = {
  label: "Submit",
  type: "button",
  className: "submit-btn",
};

export const SignUpButton = Template.bind({});
SignUpButton.args = {
  label: "Register",
  type: "button",
  className: "schedule-trip",
};

export const LogInButton = Template.bind({});
LogInButton.args = {
  label: "Login",
  type: "button",
  className: "schedule-trip",
};
