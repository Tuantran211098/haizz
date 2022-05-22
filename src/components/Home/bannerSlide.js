import React from "react";
import PropTypes from "prop-types";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

BannerSlide.propTypes = {
  data: PropTypes.array,
};
BannerSlide.defaultProps = {
  data: [],
};

function BannerSlide(props) {
  const myDatas = "collections/all";
  return (
    <div className="block-banner-slide">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        //pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        //onSwiper={(swiper) => console.log(swiper)}
        //onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Link to={`${myDatas}`}>
            <img src="https://file.hstatic.net/200000264467/file/movie1_0e14ddd5745c4efabfba0ee9a8db7c2f.png" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={`${myDatas}`}>
            <img src="https://file.hstatic.net/200000264467/file/movie2_3080b4421c2b4f7182f65a6f1a78410f.png" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BannerSlide;
