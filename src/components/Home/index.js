import PropTypes from "prop-types";
import $ from "jquery";
import React, { useState } from "react";
import SlideSwipers from "./../../common/reuse/index";
import BannerSlide from "./../../components/Home/bannerSlide";
import BlockHomePageFour from "./../../common/reuse/blockHomePageFour";
import TabMovie from "./tabmovie";
import ComingSoon from "../../common/reuse/comingsoon";
import ImagePartner from "./imagePartner";
import "./../../main.js";
HomePage.propTypes = {
  data: PropTypes.array,
};
HomePage.defaultProps = {
  data: [],
};
function HomePage(props) {
  const { data } = props;
  const renderMovie = data.filter((data) => data.countries[0].name === "USA");
  const renderTabMovieAction = data.filter(
    (data) => data.typemovie === "action"
  );
  const renderTabMovieFiction = data.filter(
    (data) => data.typemovie === "fiction"
  );
  const renderTabMovieLove = data.filter((data) => data.typemovie === "love");

  /* section block homepage four */
  const getTimerComing = Date.now();
  const renderMovieNew = data.filter(
    (data) =>
      parseInt(Date.parse(data.createdAt)) >= 1642636483646 &&
      parseInt(Date.parse(data.createdAt)) < getTimerComing
  );
  const renderMovieComing = data.filter(
    (data) => parseInt(Date.parse(data.createdAt)) > getTimerComing
  );
  //console.log("renderMovieNew", renderMovieNew);
  return (
    <div className="home-page" id="home-page">
      <div className="Banner-slider">
        <BannerSlide />
      </div>
      <div className="block-home-page-one">
        <div className="container">
          <div className="FlashSale common-slide">
            <h3>
              <span>FLASHSALE TODAY</span>
            </h3>
            <SlideSwipers data={data} />
          </div>
        </div>
      </div>
      <div className="block-home-page-two">
        <div className="container">
          <div className="movie-popular common-slide">
            <h3>
              <span>MOVIE POPULAR</span>
            </h3>
            <SlideSwipers dataMovie={renderMovie} />
          </div>
        </div>
      </div>
      <div className="block-home-page-three">
        <div className="container">
          <div className="tab-movie common-slide">
            <h3>
              <span>THỂ LOẠI PHIM</span>
            </h3>
            <div className="wrap-tab-movie">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                <TabMovie
                  renderTabMovieAction={renderTabMovieAction}
                  renderTabMovieFiction={renderTabMovieFiction}
                  renderTabMovieLove={renderTabMovieLove}
                />
              </div>
              <div class="col-lg-4 wrap-tab-movie-poster">
                <div className="tab-movie-poster">
                  <img
                    src="https://file.hstatic.net/200000264467/file/movie_ghost_ce1b2ecb8fdb41f6a9054610bc047967.png"
                    alt="movie posters"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-home-page-four">
        <div className="container">
          <div className="tab-movie common-slide">
            <div className="row">
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h3>
                  <span>PHIM MỚI NHẤT</span>
                </h3>
                <div className="block-four-newMovie">
                  <BlockHomePageFour renderMovieNew={renderMovieNew} />
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h3>
                  <span>PHIM SẮP CHIẾU</span>
                </h3>
                <div className="block-four-comingsoon">
                  <ComingSoon renderMovieComing={renderMovieComing} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-home-page-five">
        <div className="common-slide">
          <h3>
            <span>ĐỐI TÁC CỦA CHÚNG TÔI</span>
          </h3>
          <div className="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <ImagePartner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
