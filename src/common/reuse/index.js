import React, { useState } from "react";
import PropTypes from "prop-types";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";
SlideSwipers.propTypes = {
  data: PropTypes.array,
  dataMovie: PropTypes.array,
};
SlideSwipers.defaultProps = {
  data: [],
  dataMovie: [],
};
function SlideSwipers(props) {
  const { data, dataMovie } = props;
  //console.log("show", data);
  //console.log("dataPopu", data);
  
  var renderSlide = data.map((slide, index) => {
    console.log('slide',slide);
    //console.log(myDatas);
    //var parseUrl = slide.url.repalce;
    //var productUrl = slide.url.slice(31, countLent);
    return (
      <SwiperSlide>
        <div className="item-slide" key={index}>
          <div className="item-slide-img">
            {
              slide.image.length > 1 ? (
                <>
                <img src={slide.image[0].stt} className="slide-img-one"/>
                <img src={slide.image[1].stt} className="slide-img-two"/></>
              ) : <img src={slide.image[0].stt} className="slide-img-one"/>
            }
          </div>
          <Link to={`/products/${slide.uuid}`} state={slide}>
            <h5>
              <strong style={{ color: "red" }}>Phim: </strong>
              {slide.title}
            </h5>
          </Link>
          <div className="slide-info">
            <p>
              <strong>Rating: </strong>
              {slide.rating}
            </p>
            <p>
              <strong>Quốc Gia: </strong>
              {slide.countries[0].name}
            </p>
          </div>
          <div className="slide-year-production">
            <p>
              <strong>Năm Sản Xuất: </strong>
              {slide.year}
            </p>
          </div>
        </div>
      </SwiperSlide>
    );
  });
  var renderMoviePopular = dataMovie.map((slide, index) => {
    //console.log(myDatas);
    //var parseUrl = slide.url.repalce;
    //var productUrl = slide.url.slice(31, countLent);
    return (
      <SwiperSlide>
        <div className="item-slide" key={index}>
          <div className="item-slide-img">
            {
              slide.image.length > 1 ? (
                <>
                <img src={slide.image[0].stt} className="slide-img-one"/>
                <img src={slide.image[1].stt} className="slide-img-two"/></>
              ) : <img src={slide.image[0].stt} className="slide-img-one"/>
            }
          </div>
          <Link to={`/products/${slide.uuid}`} state={slide}>
            <h5>
              <strong style={{ color: "#b30001" }}>Phim: </strong>
              {slide.title}
            </h5>
          </Link>
          <div className="slide-info">
            <p>
              <strong>Rating: </strong>
              {slide.rating}
            </p>
            <p>
              <strong>Quốc Gia: </strong>
              {slide.countries[0].name}
            </p>
          </div>
          <div className="slide-year-production">
            <p>
              <strong>Năm Sản Xuất: </strong>
              {slide.year}
            </p>
          </div>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <div className="block-Swiper-slide common-margin">
      <div className="flashsale">
        <div className="Swiper-slide_item">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            //spaceBetween={20}
            // slidesPerView={5}
            navigation
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1028: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            //pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            //onSwiper={(swiper) => console.log(swiper)}
            //onSlideChange={() => console.log("slide change")}
            // effect={"fade"}
          >
            {renderSlide}
          </Swiper>
        </div>
      </div>
      <div className="movie-popular">
        <div className="Swiper-slide_item">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            //spaceBetween={20}
            //slidesPerView={5}
            //slidesPerGroup={5}
            //pagination={{ clickable: true }}

            navigation
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1028: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            //pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            //onSwiper={(swiper) => console.log(swiper)}
            //onSlideChange={() => console.log("slide change")}
          >
            {renderMoviePopular}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default SlideSwipers;
