import TravelWithUs from "./TravelWithUs";

export default {
  title: "Organisms/TravelWithUs",
  component: TravelWithUs,
};

const Template = (args) => <TravelWithUs {...args}></TravelWithUs>;

export const Travel = Template.bind({});
Travel.args = {
  TravelCaption: "Want To Travel With Us?",
  bookNow: "Book Now",
};
