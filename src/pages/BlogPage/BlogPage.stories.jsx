import BlogPage from "./BlogPage";

export default {
  title: "Pages/BlogPage",
  component: BlogPage,
};

const Template = (args) => <BlogPage {...args}></BlogPage>;

export const OurBlogPage = Template.bind({});
OurBlogPage.args = {};
