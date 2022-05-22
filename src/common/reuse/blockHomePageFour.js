import React, { useState } from "react";
import PropTypes from "prop-types";
import Pagination from "react-js-pagination";
import $ from "jquery";
import { Link } from "react-router-dom";
BlockHomePageFour.propTypes = {
  renderMovieNew: PropTypes.array,
};
BlockHomePageFour.defaultProps = {
  renderMovieNew: [],
};
function BlockHomePageFour(props) {
  const { renderMovieNew } = props;
  var resiseDevice = document.documentElement.clientWidth;
  var todosPerPage;
  if (resiseDevice >= 575 && resiseDevice < 992) {
    todosPerPage = 2;
  } else if (resiseDevice > 991) {
    todosPerPage = 3;
  } else {
    todosPerPage = 1;
  }
  const [activePage, setCurrentPage] = useState(1);
  // Logic for displaying current todos
  const indexOfLastTodo = activePage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentMovieNew = renderMovieNew.slice(
    indexOfFirstTodo,
    indexOfLastTodo
  );
  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    $(".pagination-text").text(`page ${pageNumber}`);
    setCurrentPage(pageNumber);
  };
  //console.log("result renderMovieNew 1", currentMovieNew);
  function onClickHandler(e, data) {
   // console.log(e.target.previousElementSibling, data.length);
    if ($(".tabs-info_des").addClass("show-more-height")) {
      // $(this).text("(Show Less)");
    } else {
      //$(this).text("(Show More)");
    }
    $(e.target).hide();
    $(e.target.previousElementSibling).addClass("show-more-height-acive");
    //$(".tabs-info_des").toggleClass("show-more-height");
  }
  const resultMovieNew = currentMovieNew.map((data) => {
    return (
      <>
        <div
          className="col-xs-12 col-sm-6 col-md-6 col-lg-4 show-detail"
          //onMouseEnter={() => onMouseEnterHandler(data)}
        >
          <div className="item-slide-img">
            {
              data.image.length > 1 ? (
                <>
                <img src={data.image[0].stt} className="slide-img-one"/>
                <img src={data.image[1].stt} className="slide-img-two"/></>
              ) : <img src={data.image[0].stt} className="slide-img-one"/>
            }
            </div>
          <div className="tabs-movie-info">
            <h6 className="tabs-info-title">
              <Link to={`/products/${data.uuid}`} state={data}>
                <strong>Phim :</strong>
                {data.title}
              </Link>
            </h6>
            <div className="tabs-info">
              <p className="tabs-info_des">{data.description}</p>
              <p>
                <strong>Năm phát hành: </strong>
                {data.year}
              </p>
            </div>
          </div>
          <div className="show-hover-detail">
            <h6 className="tabs-info-title">
              <Link to={`/products/${data.uuid}`} state={data}>
                <strong>Phim :</strong>
                {data.title}
              </Link>
            </h6>
            <div className="tabs-info">
              <p className="tabs-info_des show-more-height">
                {data.description}
              </p>
              {data.description.length > 300 ? (
                <div
                  class="show-more"
                  onClick={(e) => onClickHandler(e, data.description)}
                >
                  Xem mô tả
                </div>
              ) : (
                ""
              )}
              <p>
                <strong>Tổ Chức: </strong>
                {data.titleOriginal}
              </p>
              <p>
                <strong>Năm phát hành: </strong>
                {data.year}
              </p>
              <div className="show-hover-detail-link">
                <Link to={`/products/${data.uuid}`} state={data}>
                  XEM CHI TIẾT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <div className="wrap-movie-new">
      <div className="row">{resultMovieNew}</div>
      <div className="pagination pagination-tabs">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={todosPerPage}
          totalItemsCount={renderMovieNew.length}
          onChange={handlePageChange}
          prevPageText="&#8592;"
          nextPageText="&#8594;"
        />
        <div className="pagination-text" style={{ display: "none" }}></div>
      </div>
    </div>
  );
}

export default BlockHomePageFour;
