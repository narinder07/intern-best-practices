import LogInPage from "./LogInPage";

export default {
  title: "Organisms/LogInPage",
  component: LogInPage,
};

const Template = (args) => <LogInPage {...args}></LogInPage>;

export const LogIN = Template.bind({});

LogIN.args = {
  formCaption: "Log In",
  noAccount: "Don't have an account?",
  signUpHere: "SignUp",
};
