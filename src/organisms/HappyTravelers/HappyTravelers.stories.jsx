import HappyTravelers from "./HappyTravelers";

export default {
  title: "Organisms/HappyTravelers",
  component: HappyTravelers,
};

const Template = (args) => <HappyTravelers {...args}></HappyTravelers>;

export const Travelers = Template.bind({});

Travelers.args = {
  travelHeading: "Our Success",
  travelPara:
    "When preparing to travel, lay out all your clothes and all your money. Then take half the clothes and twice the money",
  happyTravel: [
    {
      travelNumbers: 107,
      travelTours: "DESTINATION",
    },
    {
      travelNumbers: 46,
      travelTours: "HOTEL",
    },
    {
      travelNumbers: 97,
      travelTours: "TRAVELERS",
    },
    {
      travelNumbers: 80,
      travelTours: "HAPPY CUSTOMERS",
    },
  ],
};
