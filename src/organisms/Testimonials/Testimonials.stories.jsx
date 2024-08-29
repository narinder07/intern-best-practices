import Testimonials from "./Testimonials";
import traveImg1 from "../../assets/dest4.jpg";
import traveImg2 from "../../assets/dest5.jpg";
import traveImg3 from "../../assets/dest6.jpg";

export default {
  title: "Organisms/Testimonials",
  component: Testimonials,
};

const Template = (args) => <Testimonials {...args}></Testimonials>;

export const OurTestimonials = Template.bind({});
OurTestimonials.args = {
  testimonialsDetails: [
    {
      images: traveImg1,
      travel: "Jonathan",
      review: "This is an amazing product!",
      alt: "Testimonials Images",
    },
    {
      images: traveImg2,
      travel: "Vicky",
      review: "Amazing  Experience",
      alt: "Testimonials Images",
    },
    {
      images: traveImg3,
      travel: "Andrew",
      review: "Absolutely love it!",
      alt: "Testimonials Images",
    },
    {
      images: traveImg1,
      travel: "Hiking",
      review: "This is an amazing product!",
      alt: "Testimonials Images",
    },
    {
      images: traveImg2,
      travel: "Vicky",
      review: "Amazing  Experience",
      alt: "Testimonials Images",
    },
    {
      images: traveImg3,
      travel: "Andrew",
      review: "Absolutely love it!",
    },
  ],
};
