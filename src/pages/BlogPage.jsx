import CommonTemplate from "../templates/common/CommonTemplate";
import recentTrip1 from "../assets/recent_trip1.png";
import recentTrip2 from "../assets/recent_trip2.png";
import recentTrip3 from "../assets/recent_trip3.png";
import { RecentTrips } from "../organisms/RecentTrips/RecentTrips";
import HeaderLinksImages from "../organisms/HeaderLinksImages/HeaderLinksImages";
import sectionImg2 from "../assets/section_img2.jpg";
const BlogPage = () => {
  const recentTripsProps = {
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
  const headerImagesProps = {
    mainText: "Blog",
    mainImg: sectionImg2,
    alt: "About us Image",
  };

  return (
    <CommonTemplate>
      <HeaderLinksImages {...headerImagesProps}></HeaderLinksImages>
      <RecentTrips {...recentTripsProps}></RecentTrips>
    </CommonTemplate>
  );
};

export default BlogPage;
