import LogInForm from "./LogInForm";

export default {
  title: "Organisms/LogInPage",
  component: LogInForm,
};

const Template = (args) => <LogInForm {...args}></LogInForm>;

export const LogIN = Template.bind({});

LogIN.args = {
  formCaption: "Log In",
  noAccount: "Don't have an account?",
  signUpHere: "SignUp",
};
