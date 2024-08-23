import HeroSlider from "./HeroSlider";
import heroImg1 from "../../assets/nature_img1.jpg";
import heroImg2 from "../../assets/nature_img2.jpg";

export default {
  title: "Organisms/HeroSlider",
  component: HeroSlider,
};

const Template = (args) => <HeroSlider {...args}></HeroSlider>;

export const Slider = Template.bind({});
Slider.args = {
  imageSlides: [
    {
      image: heroImg1,
      alt: "hero image 1",
      label: "If you truly love nature you will find beauty everywhere",
    },
    {
      image: heroImg2,
      alt: "hero image 2",
      label: "Nature is pleased with simplicity and nature is no dummy",
    },
  ],
};
