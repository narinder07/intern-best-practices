import AboutPage from "./AboutPage";

export default {
  title: "Pages/AboutPage",
  component: AboutPage,
};

const Template = (args) => <AboutPage {...args}></AboutPage>;

export const OurAboutPage = Template.bind({});
OurAboutPage.args = {};
