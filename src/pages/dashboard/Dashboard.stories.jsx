import Dashboard from "./Dashboard";

export default {
  title: "Pages/Dashboard",
  component: Dashboard,
};

const Template = (args) => <Dashboard {...args}></Dashboard>;

export const OurDashboard = Template.bind({});
OurDashboard.args = {};
