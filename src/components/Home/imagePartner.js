import React from "react";
import PropTypes from "prop-types";
import logo1 from "./imagepartner/logo1.png";
import logo2 from "./imagepartner/logo2.png";
import logo3 from "./imagepartner/logo3.jpg";
import logo4 from "./imagepartner/logo4.png";
import logo5 from "./imagepartner/logo5.jpg";
import logo6 from "./imagepartner/logo6.jpg";
import logo7 from "./imagepartner/logo7.png";
import logo8 from "./imagepartner/logo8.jpg";
import logo9 from "./imagepartner/logo9.jpg";
import logo10 from "./imagepartner/logo10.jpg";
import {
  Grid,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
ImagePartner.propTypes = {};
function ImagePartner(props) {
  return (
    <>
      <Swiper
        modules={[
          Navigation,
          EffectFade,
          Autoplay,
          Pagination,
          Grid,
          Scrollbar,
          A11y,
        ]}
        autoplay={{
          waitForTransition: true,
          delay: 5000,
          disableOnInteraction: true,
        }}
        fadeEffect={{ crossFade: true }}
        // spaceBetween={20}
        //slidesPerView={7}
        //direction="vertical"
        navigation
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1028: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
        }}
        //speed={700}
        // autoplayDisableOnInteraction: true,
        //centeredSlides={true}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        //onSwiper={(swiper) => console.log(swiper)}
        //onSlideChange={() => console.log("slide change")}
        //loop={true}
      >
        <SwiperSlide>
          <img src={logo1} alt="./" className="image-partner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo2} alt="./" className="image-partner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo3} alt="./" className="image-partner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo4} alt="./" className="image-partner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo5} alt="./" className="image-partner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo6} alt="./" className="image-partner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo7} alt="./" className="image-partner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo8} alt="./" className="image-partner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo9} alt="./" className="image-partner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo10} alt="./" className="image-partner" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default ImagePartner;
