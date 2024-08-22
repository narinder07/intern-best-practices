import SectionsImages from "./SectionsImages";
import AboutSectionImg1 from "../../assets/about_section_img.jpg";

export default {
  title: "Organisms/SectionsImages",
  component: SectionsImages,
};

const Template = (args) => <SectionsImages {...args}></SectionsImages>;
export const Images = Template.bind({});

Images.args = {
  mainText: "About Us",
  mainImg: AboutSectionImg1,
  alt: "About us Image",
};
