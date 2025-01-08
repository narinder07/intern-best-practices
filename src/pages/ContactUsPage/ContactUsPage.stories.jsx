import ContactUsPage from "./ContactUsPage";

export default {
  title: "Pages/ContactUsPage",
  component: ContactUsPage,
};

const Template = (args) => <ContactUsPage {...args}></ContactUsPage>;

export const OurContactPage = Template.bind({});
OurContactPage.args = {};
