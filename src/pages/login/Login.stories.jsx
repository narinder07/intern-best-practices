import Login from "./Login";

export default {
  title: "Pages/Login",
  component: Login,
};

const Template = (args) => <Login {...args}></Login>;

export const OurLogin = Template.bind({});
OurLogin.args = {};
