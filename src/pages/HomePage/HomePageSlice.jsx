import { createSlice } from "@reduxjs/toolkit";
import heroImg1 from "../../assets/nature_img1.jpg";
import heroImg2 from "../../assets/nature_img2.jpg";
import aboutImg from "../../assets/about-img.png";
import recentTrip1 from "../../assets/recent_trip1.png";
import recentTrip2 from "../../assets/recent_trip2.png";
import recentTrip3 from "../../assets/recent_trip3.png";
import traveImg1 from "../../assets/dest4.jpg";
import traveImg2 from "../../assets/dest5.jpg";
import traveImg3 from "../../assets/dest6.jpg";

const initialState = {
  heroSliderProps: {
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
  },

  aboutInfoProps: {
    label: "About Us",
    caption:
      "Nature is the biggest reason for our easy survival on this planet. It provides us with food, clothing, and shelter. The sunlight, plants, air, rain, animals, and everything come together to complete nature. It makes our environment liveable and beautiful. It has given life to human beings, and it was present even before the evolution of human beings. It makes a natural cycle for the smooth functioning of every living being on this planet. There is a reason why nature is referred to as “mother”. Mother nature cherishes and nurtures us.",
    image: aboutImg,
    alt: "About us image",
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

  happyTravelersProps: {
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
  },

  testimonialsProps: {
    testimonialsDetails: [
      {
        images: traveImg1,
        travel: "Jonathan",
        review: "This is an amazing product!",
      },
      {
        images: traveImg2,
        travel: "Vicky",
        review: "Amazing  Experience",
      },
      {
        images: traveImg3,
        travel: "Andrew",
        review: "Absolutely love it!",
      },
      {
        images: traveImg1,
        travel: "Alex",
        review: "This is an amazing product!",
      },
      {
        images: traveImg2,
        travel: "Dove",
        review: "Amazing  Experience",
      },
      {
        images: traveImg3,
        travel: "Rachel",
        review: "Absolutely love it!",
      },
    ],
  },

  travelWithUsProps: {
    TravelCaption: "Want To Travel With Us?",
    bookNow: "Book Now",
  },
};

export const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    heroSlider: (state) => {
      state.heroSliderProps;
    },
    aboutInfo: (state) => {
      state.aboutInfoProps;
    },
    recentTrip: (state) => {
      state.recentTripsProps;
    },
    happyTraveler: (state) => {
      state.happyTravelersProps;
    },
    testimonials: (state) => {
      state.testimonialsProps;
    },
    travelWithUs: (state) => {
      state.travelWithUsProps;
    },
  },
});

export const { heroSlider, aboutInfo, recentTrip, testimonials, travelWithUs } =
  homePageSlice.actions;
export default homePageSlice.reducer;
