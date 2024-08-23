import HeaderLinksImages from "../HeaderLinksImages/HeaderLinksImages";
import sectionImg1 from "../../assets/section_img1.jpg";

export default {
  title: "Organisms/HeaderLinksImages",
  component: HeaderLinksImages,
};

const Template = (args) => <HeaderLinksImages {...args}></HeaderLinksImages>;
export const Images = Template.bind({});

Images.args = {
  mainText: "About Us",
  mainImg: sectionImg1,
  alt: "About us Image",
};
