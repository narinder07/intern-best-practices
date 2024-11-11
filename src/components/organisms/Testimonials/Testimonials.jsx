import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import { Navigation, Autoplay } from "swiper/modules";
import "./Testimonials.css";

const Testimonials = (props) => {
  return (
    <section className="section-padding">
      <div className="container">
        <Swiper
          navigation={true}
          fadeEffect={{ crossFade: true }}
          speed={1500}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{ delay: 2500 }}
          modules={[Navigation, Autoplay, EffectFade]}
          style={{ "--swiper-pagination-bullet-size": "15px" }}
        >
          {props.testimonialsDetails.map((userInfo, userIndex) => (
            <SwiperSlide key={userIndex}>
              <div className="travel-img">
                <img src={userInfo.images} alt={userInfo.alt} />
                <div className="personInfo">
                  <h1>{userInfo.travel}</h1>
                  <p>{userInfo.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
