import HeroSlider from "./HeroSlider";
import heroImg1 from "../../assets/nature_img1.jpg";
import heroImg2 from "../../assets/nature_img2.jpg";
import heroImg3 from "../../assets/nature_img3.jpg";
import heroImg4 from "../../assets/nature_img4.jpg";

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
      label: "nature image 1",
    },
    {
      image: heroImg2,
      alt: "hero image 2",
      label: "nature image 2",
    },
    {
      image: heroImg3,
      alt: "hero image 3",
      label: "nature image 3",
    },
    {
      image: heroImg4,
      alt: "hero image 4",
      label: "nature image 4",
    },
  ],
};
