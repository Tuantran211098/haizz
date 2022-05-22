import React, { useRef, useState } from "react";
// Import Swiper React components
import { } from "swiper/react";
import PropTypes from "prop-types";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import $ from "jquery";

// install Swiper modules
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
DetailPage.propTypes = {};


function DetailPage(props) {
  const location = useLocation();
  //const { data } = props;
  const state = location.state;
  var result;
  console.log(state);
  var countLengt = state.image?.length || 0;
  var loopContry = "";
  var countLengt = parseInt(state.countries?.length || 0);
  for (var i = 0; i < countLengt; i++) {
    loopContry += state.countries[i].name + ". ";
  }
  return (
    <div className="page-detail">
      <div className="page-detail-mt page-detail-blockone">
        <div className="container">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="detail-blockone-left">
              <Carousel autoPlay interval="5000" infiniteLoop transitionTime="1000"
                swipeable={true}
                showArrows={true}
                showThumbs={true}
              >
                {
                  state.image.map((img, index) => (
                    < div>
                      <img key={index} src={img.stt} />
                    </div>
                  ))
                }
              </Carousel>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="detail-blockone-right">
              <div className="detail-thumbs-info">
                <h3 className="thumbs-info-title"><strong>Phim: </strong>{state.title}</h3>
                <h5 className="thumbs-info-type"><strong>Thể loại: </strong>{state.typemovie}</h5>
                <h5 className="thumbs-info-country"><strong>Quốc Gia: </strong>{loopContry}</h5>
                <h5 className="thumbs-info-release"><strong>Năm phát hành: </strong>{state.release}</h5>
                <h5 className="thumbs-info-original"><strong>Tổ chức: </strong>{state.titleOriginal}</h5>
                <p className="thumbs-info-des"><strong>Mô tả: </strong>{state.description}</p>
                <div className="check-like-dislike">
                  <strong>Bạn yêu thích không: </strong>
                  <div className="checkbox">
                    <input type="checkbox" id="trigger" />
                    <label for="trigger">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M128 447.1V223.1c0-17.67-14.33-31.1-32-31.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64C113.7 479.1 128 465.6 128 447.1zM512 224.1c0-26.5-21.48-47.98-48-47.98h-146.5c22.77-37.91 34.52-80.88 34.52-96.02C352 56.52 333.5 32 302.5 32c-63.13 0-26.36 76.15-108.2 141.6L178 186.6C166.2 196.1 160.2 210 160.1 224c-.0234 .0234 0 0 0 0L160 384c0 15.1 7.113 29.33 19.2 38.39l34.14 25.59C241 468.8 274.7 480 309.3 480H368c26.52 0 48-21.47 48-47.98c0-3.635-.4805-7.143-1.246-10.55C434 415.2 448 397.4 448 376c0-9.148-2.697-17.61-7.139-24.88C463.1 347 480 327.5 480 304.1c0-12.5-4.893-23.78-12.72-32.32C492.2 270.1 512 249.5 512 224.1z" /></svg>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}

export default DetailPage;
