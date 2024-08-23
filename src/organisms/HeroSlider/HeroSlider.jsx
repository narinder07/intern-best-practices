import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import "./HeroSlider.css";

import { Navigation, Autoplay } from "swiper/modules";

const HeroSlider = (props) => {
  return (
    <>
      <Swiper
        effect={"fade"}
        navigation={true}
        fadeEffect={{ crossFade: true }}
        speed={1500}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        modules={[Navigation, Autoplay, EffectFade]}
        style={{ "--swiper-navigation-color": "#fff" }}
      >
        {props.imageSlides.map((sliderImg, sliderIndex) => (
          <SwiperSlide key={sliderIndex}>
            <div className=" slider-image">
              <img
                src={sliderImg.image}
                className="hero-slider-image"
                alt={sliderImg.alt}
              />
              <div className="slider-title text-center">
                <h1 className="display-4 text-white">{sliderImg.label}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSlider;
