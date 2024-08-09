import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const HeroSlider = (props) => {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        effect={"fade"}
        navigation={true}
        fadeEffect={{ crossFade: true }}
        spaceBetween={20}
        speed={1500}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        style={{ "--swiper-navigation-color": "#fff" }}
      >
        {props.imageSlides.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img.image} alt={img.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSlider;
