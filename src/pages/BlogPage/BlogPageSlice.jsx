import { createSlice } from "@reduxjs/toolkit";
import sectionImg2 from "../../assets/section_img2.jpg";
import recentTrip1 from "../../assets/recent_trip1.png";
import recentTrip2 from "../../assets/recent_trip2.png";
import recentTrip3 from "../../assets/recent_trip3.png";

const initialState = {
  headerImagesProps: {
    mainText: "Blog",
    mainImg: sectionImg2,
    alt: "About us Image",
  },
  recentTripsProps: {
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
  },
};

export const blogPageSlice = createSlice({
  name: "blogPage",
  initialState,
  reducers: {
    headerImages: (state) => {
      state.headerImagesProps;
    },
    recentTrips: (state) => {
      state.recentTripsProps;
    },
  },
});
export const { headerImages, recentTrips } = blogPageSlice.actions;
export default blogPageSlice.reducer;
