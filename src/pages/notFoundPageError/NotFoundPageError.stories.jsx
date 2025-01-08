import NotFoundPageError from "./NotFoundPageError";

export default {
  title: "Pages/NotFoundPageError",
  component: NotFoundPageError,
};

const Template = (args) => <NotFoundPageError {...args}></NotFoundPageError>;

export const NotFoundPage = Template.bind({});
NotFoundPage.args = {};
