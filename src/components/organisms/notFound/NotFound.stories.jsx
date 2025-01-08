import NotFound from "./NotFound";
import pageNotFoundImg from "../../../assets/page-not-found.jpg";
export default {
  title: "Organisms/NotFound",
  component: NotFound,
};

const Template = (args) => <NotFound {...args}></NotFound>;

export const NoFound = Template.bind({});
NoFound.args = {
  pageNotFoundImg: pageNotFoundImg,
  alt: "404 Error image",
  pageNotFoundText1:
    "Sorry, we can't seem to find the page you're looking for ",
  pageNotFoundText2:
    "The may be a misspelling in the URL entered or the page you are looking for may no longer exist",
};
