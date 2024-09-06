import SignUp from "./SignUp";

export default {
  title: "Molecules/SignUp",
  component: SignUp,
};

const Template = (args) => <SignUp {...args}></SignUp>;

export const SignForm = Template.bind({});
SignForm.args = {
  buttonText: "Sign Up",
  placeholder: "Enter Your Email",
  type: "email",
  name: "email",
};
