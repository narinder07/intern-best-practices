import SignUpForm from "./SignUpForm";

export default {
  title: "Organisms/SignUpForm",
  component: SignUpForm,
};

const Template = (args) => <SignUpForm {...args}></SignUpForm>;

export const SignUp = Template.bind({});

SignUp.args = {
  formCaption: "Sign Up",
  haveAccount: "Already have an account?",
  loginHere: "Login Here",
};
