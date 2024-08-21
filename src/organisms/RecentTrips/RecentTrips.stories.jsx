import { RecentTrips } from "./RecentTrips";
import recentTrip1 from "../../assets/recent_trip1.png";
import recentTrip2 from "../../assets/recent_trip2.png";
import recentTrip3 from "../../assets/recent_trip3.png";

export default {
  title: "Organisms/RecentTrips",
  component: RecentTrips,
};

const Template = (args) => <RecentTrips {...args}></RecentTrips>;

export const TripInfo = Template.bind({});

TripInfo.args = {
  tripLabel: "Recent Trips",
  tripDetails: [
    {
      tripImg: recentTrip1,
      tripDate: "Oct 12, 2022",
      tripCaption: "Journeys Are Best Measured In New Friends",
      alt: "Trip Image 1",
    },
    {
      tripImg: recentTrip2,
      tripDate: "Nov 12, 2023",
      tripCaption: "Journeys Are Best Measured In New Friends",
      alt: "Trip Image 2",
    },
    {
      tripImg: recentTrip3,
      tripDate: "July 7, 2024",
      tripCaption: "Journeys Are Best Measured In New Friends",
      alt: "Trip Image 3",
    },
  ],
};
