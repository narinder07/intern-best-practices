import SignUpPage from "./SignUpPage";

export default {
  title: "Organisms/SignUpPage",
  component: SignUpPage,
};

const Template = (args) => <SignUpPage {...args}></SignUpPage>;

export const CreateSignUpForm = Template.bind({});

CreateSignUpForm.args = {
  formCaption: "Create New Account",
};
