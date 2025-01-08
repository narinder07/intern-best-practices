import LoginPage from "./LoginPage";

export default {
  title: "Pages/LoginPage",
  component: LoginPage,
};

const Template = (args) => <LoginPage {...args}></LoginPage>;

export const OurLogin = Template.bind({});
OurLogin.args = {};
