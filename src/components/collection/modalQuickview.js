import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
ModalQuickView.propTypes = {
  dataQuickView: PropTypes.array,
};
ModalQuickView.defaultProps = {
  dataQuickView: null,
};
function ModalQuickView(props) {
  const { dataQuickView } = props;
  var loopContry = "";
  console.log("data", dataQuickView);
  //console.log(countLengt);
  console.log(loopContry);
  const data = dataQuickView || [];
  var countLengt = parseInt(data.countries?.length || 0);
  //var countLengt;
  /*if (!dataQuickView) {
    countLengt = parseInt(dataQuickView.countries.length);
  } else {
    countLengt = 3;
  }*/
  for (var i = 0; i < countLengt; i++) {
    loopContry += data.countries[i].name + ". ";
  }
  //console.log(loopContry);
  const renderModalView = (
    <>
      <div className="mask"></div>
      <div id="quick-view-pop-up">
        <div className="quick-view-panel">
          <div className="quick-view-close">x</div>
          <div className="mini-carousel">
            <ul className="mini-item">
              <li>
                <a href="#" title="Image1-Small">
                  {" "}
                  <img
                    src="http://images.asos-media.com/inv/media/0/7/0/6/4176070/white/image1s.jpg"
                    alt="Product"
                  />
                </a>
              </li>
              <li>
                <a href="#" title="Image2-Small">
                  <img
                    src="http://images.asos-media.com/inv/media/0/7/0/6/4176070/image2s.jpg"
                    alt="image2-small"
                  />
                </a>
              </li>
              <li>
                <a href="#" title="Image3-Small">
                  <img
                    src="http://images.asos-media.com/inv/media/0/7/0/6/4176070/image3s.jpg"
                    alt="image3-small"
                  />
                </a>
              </li>
              <li>
                <a href="#" title="Image4-Small">
                  <img
                    src="http://images.asos-media.com/inv/media/0/7/0/6/4176070/image4s.jpg"
                    alt="image4-small"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="carousel">
            <div className="btn-view-video"></div>
            <div className="image-large">
              <ul>
                <li>
                  {" "}
                  <img
                    src="http://images.asos-media.com/inv/media/0/7/0/6/4176070/white/image1xl.jpg"
                    alt="image1-large"
                  />
                </li>
                <li>
                  <img src="http://images.asos-media.com/inv/media/0/7/0/6/4176070/image2xl.jpg" />
                </li>
                <li>
                  <img src="http://images.asos-media.com/inv/media/0/7/0/6/4176070/image3xl.jpg" />
                </li>
                <li>
                  <img src="http://images.asos-media.com/inv/media/0/7/0/6/4176070/image4xl.jpg" />
                </li>
              </ul>
              <a href="#" className="prev">
                Previous
              </a>
              <a href="#" className="next">
                Next
              </a>
              <a href="#" className="quick-view-video">
                View Video
              </a>
            </div>
            <div className="video-player">
              <iframe
                width="290"
                height="290"
                src="https://www.youtube.com/embed/5dDDk-RY6Wc?list=PLwTBfJVVh8CWpDg9UiP9xpbQsNzEP88m0"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="detail">
            <div className="product-details">
              <h4 className="product-name">
                <strong>Phim: </strong>
                {data.title}
              </h4>
              <h6 className="product-year">
                <strong>Năm Sản Xuất: </strong>
                {data.year}
              </h6>
              <h6 className="product-country">
                <strong>Quốc Gia: </strong>
                {loopContry}
              </h6>
              <p className="product-descrip">{data.description}</p>
            </div>
            <div className="quickview-button">
              <div className="quickview-button_wishlist">
                <a
                  href="javascript:void(0)"
                  className="button grey small save-for-later"
                //data-bind="event:{click: saveForLater, touchstart:saveForLater}"
                >
                  Xem Sau
                </a>
              </div>
              <div className="quickview-button-detail">
                <Link
                  to={`/products/${dataQuickView.uuid}`}
                  state={dataQuickView}
                  className="view-more-detail"
                >
                  Xem Chi Tiết
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return <div>{renderModalView}</div>;
}

export default ModalQuickView;
