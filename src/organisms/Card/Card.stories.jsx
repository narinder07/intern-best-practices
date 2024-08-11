import Card from "./Card";
import cardImg1 from "../../assets/card_img1.jpg";
import cardImg2 from "../../assets/card_img2.jpg";
import cardImg3 from "../../assets/card_img3.jpg";

export default {
  title: "Organisms/CardSection",
  component: Card,
};

const Template = (args) => <Card {...args}></Card>;
export const WebCards = Template.bind({});
WebCards.args = {
  cardsInfo: [
    {
      cardImages: cardImg1,
      label: "Mountains",
      captionPara:
        "It maintains an ecological system to make everyone live in harmony.",
      alt: "card image 1",
    },
    {
      cardImages: cardImg2,
      label: "Beautiful Tress",
      captionPara: "Nature consists of everything that we can see and feel.",
      alt: "card image 2",
    },
    {
      cardImages: cardImg3,
      label: "Rivers",
      captionPara:
        "Nature holds a balance between diverse ecosystems for smooth functioning.",
      alt: "card image 3",
    },
  ],
};
