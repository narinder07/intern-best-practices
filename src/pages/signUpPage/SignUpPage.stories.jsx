import SignUpPage from "./SignUpPage";

export default {
  title: "Pages/SignUpPage",
  component: SignUpPage,
};

const Template = (args) => <SignUpPage {...args}></SignUpPage>;

export const CreateSignUpForm = Template.bind({});

CreateSignUpForm.args = {};
