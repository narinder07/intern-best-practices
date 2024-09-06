import CommonTemplate from "../../templates/common/CommonTemplate";

import { RecentTrips } from "../../organisms/RecentTrips/RecentTrips";
import HeaderLinksImages from "../../organisms/HeaderLinksImages/HeaderLinksImages";
import { useSelector } from "react-redux";

const BlogPage = () => {
  const headerImages = useSelector(
    (state) => state.blogPageReducer.headerImagesProps
  );
  const recentTrips = useSelector(
    (state) => state.blogPageReducer.recentTripsProps
  );

  return (
    <CommonTemplate>
      <HeaderLinksImages {...headerImages}></HeaderLinksImages>
      <RecentTrips {...recentTrips}></RecentTrips>
    </CommonTemplate>
  );
};

export default BlogPage;
