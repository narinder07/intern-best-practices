import ServicesPage from "./ServicesPage";

export default {
  title: "Pages/ServicesPage",
  component: ServicesPage,
};

const Template = (args) => <ServicesPage {...args}></ServicesPage>;

export const OurServicesPage = Template.bind({});
OurServicesPage.args = {};
