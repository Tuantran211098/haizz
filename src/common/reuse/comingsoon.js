import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
//import Pagination from "react-js-pagination";
ComingSoon.propTypes = {
  renderMovieComing: PropTypes.array,
};
ComingSoon.defaultProps = {
  renderMovieComing: [],
};
function ComingSoon(props) {
  const { renderMovieComing } = props;
  const rendenComingsoon = renderMovieComing.map((data, index) => {
    return (
      <SwiperSlide>
        <div className="block-comingsoon-image" key={data._id}>
          <img src={data.image[0].stt} alt={data.title} />
        </div>
        <div className="block-comingsoon-info">
          <div className="comingsoon-info">
            <Link to={`/products/${data.uuid}`} state={data}>
              <h4>{data.title}</h4>
            </Link>
            <p>{data.description}</p>
            <h6>
              <strong>Năm phát hành: </strong>
              {data.year}
            </h6>
            <div className="comingsoon-info-flex">
              <div className="comingsoon-flex-rating">
                <strong>Rating: </strong>
                {data.rating}
              </div>
              <div className="comingsoon-flex-country">
                <strong>Quốc Gia: </strong>
                <p>{data.countries[0].name}</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination, Grid, Scrollbar, A11y]}
      autoplay={{
        waitForTransition: true,
        delay: 5000,
        disableOnInteraction: true,
      }}
      spaceBetween={20}
      slidesPerView={3}
      direction="vertical"
      navigation
      className="mySwiper"
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      //onSwiper={(swiper) => console.log(swiper)}
      //onSlideChange={() => console.log("slide change")}
      //loop={true}
    >
      {rendenComingsoon}
    </Swiper>
  );
}

export default ComingSoon;
