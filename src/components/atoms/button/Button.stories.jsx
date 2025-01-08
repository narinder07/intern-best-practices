import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args}></Button>;
export const ReadMoreButton = Template.bind({});
ReadMoreButton.args = {
  label: "Sign Up",
  type: "button",
  className: "submit",
};

export const SubmitButton = Template.bind({});
SubmitButton.args = {
  label: "Submit",
  type: "button",
  className: "submit-btn",
};

export const LogInButton = Template.bind({});
LogInButton.args = {
  label: "Log In",
  type: "button",
  className: "login-btn",
};
export const SendMessage = Template.bind({});
SendMessage.args = {
  label: "Send Message",
  type: "button",
  className: "message-btn",
};
export const NotFoundPage = Template.bind({});
NotFoundPage.args = {
  label: "Go To Home",
  type: "button",
  className: "go-home",
};
