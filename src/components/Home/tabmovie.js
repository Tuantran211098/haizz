import React, { useState } from "react";
import PropTypes from "prop-types";
import { TabPanel, useTabs } from "react-headless-tabs";
import Pagination from "react-js-pagination";
import $ from "jquery";
import { Link } from "react-router-dom";
//import { TabSelector } from "./TabSelector";
TabMovie.propTypes = {
  renderTabMovieAction: PropTypes.array,
  renderTabMovieFiction: PropTypes.array,
  renderTabMovieLove: PropTypes.array,
};
TabMovie.defaultProps = {
  renderTabMovieAction: [],
  renderTabMovieFiction: [],
  renderTabMovieLove: [],
};
function TabMovie(props) {
  const { renderTabMovieAction, renderTabMovieFiction, renderTabMovieLove } =
    props;
  //console.log(renderTabMovie);
  const [selectedTab, setSelectedTab] = useTabs([
    "ACTION",
    "FICTION",
    "LOVE",
    "billing",
  ]);
  var resiseDevice = document.documentElement.clientWidth;
  var todosPerPage;
  if (resiseDevice >= 575 && resiseDevice < 768) {
    todosPerPage = 2;
  } else if (resiseDevice > 767 && resiseDevice < 992) {
    todosPerPage = 3;
  } else if (resiseDevice > 991) {
    todosPerPage = 4;
  } else {
    todosPerPage = 1;
  }
  //console.log(resiseDevice);
  const [activePage, setCurrentPage] = useState(1);
  // Logic for displaying current todos
  const indexOfLastTodo = activePage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodoActions = renderTabMovieAction.slice(
    indexOfFirstTodo,
    indexOfLastTodo
  );
  const currentTodoFiction = renderTabMovieFiction.slice(
    indexOfFirstTodo,
    indexOfLastTodo
  );
  const currentTodoLove = renderTabMovieLove.slice(
    indexOfFirstTodo,
    indexOfLastTodo
  );
  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    $(".pagination-text").text(`page ${pageNumber}`);
    setCurrentPage(pageNumber);
  };

  const renderAction = (currentTodoActions && currentTodoActions).map(
    (data, index) => {
      return (
        <>
          <div
            className="col-xs-12 col-sm-6 col-md-4 col-lg-3 show-detail"
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
    }
  );
  const renderFiction = (currentTodoFiction && currentTodoFiction).map(
    (data, index) => {
      return (
        <>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 show-detail">
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
    }
  );
  const renderLove = (currentTodoLove && currentTodoLove).map((data, index) => {
    return (
      <>
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 show-detail">
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
  return (
    <div className="tab-movie-overflow">
      <nav className="flex border-b border-gray-300">
        <li
          isActive={selectedTab === "ACTION"}
          className={selectedTab === "ACTION" ? "active " : ""}
          onClick={() => setSelectedTab("ACTION")}
        >
          PHIM HANH DỘNG
        </li>
        <li
          isActive={selectedTab === "FICTION"}
          className={selectedTab === "FICTION" ? "active " : ""}
          onClick={() => setSelectedTab("FICTION")}
        >
          PHIM VIỄN TƯỞNG
        </li>
        <li
          className={selectedTab === "LOVE" ? "active " : ""}
          isActive={selectedTab === "LOVE"}
          onClick={() => setSelectedTab("LOVE")}
        >
          PHIM TÌNH CẢM
        </li>
        <li
          className={selectedTab === "billing" ? "active " : ""}
          isActive={selectedTab === "billing"}
          onClick={() => setSelectedTab("billing")}
        >
          Billing
        </li>
      </nav>
      <div className="p-4">
        <TabPanel hidden={selectedTab !== "ACTION"}>
          <div className="row">{renderAction}</div>
          <div className="pagination pagination-tabs">
            <Pagination
              activePage={activePage}
              itemsCountPerPage={todosPerPage}
              totalItemsCount={renderTabMovieAction.length}
              onChange={handlePageChange}
              prevPageText="&#8592;"
              nextPageText="&#8594;"
            />
            <div className="pagination-text" style={{ display: "none" }}></div>
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "FICTION"}>
          <div className="row">{renderFiction}</div>
          <div className="pagination pagination-tabs">
            <Pagination
              activePage={activePage}
              itemsCountPerPage={todosPerPage}
              totalItemsCount={renderTabMovieFiction.length}
              onChange={handlePageChange}
              prevPageText="&#8592;"
              nextPageText="&#8594;"
            />
            <div className="pagination-text" style={{ display: "none" }}></div>
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "LOVE"}>
          <div className="row">{renderLove}</div>
          <div className="pagination pagination-tabs">
            <Pagination
              activePage={activePage}
              itemsCountPerPage={todosPerPage}
              totalItemsCount={renderTabMovieLove.length}
              onChange={handlePageChange}
              prevPageText="&#8592;"
              nextPageText="&#8594;"
            />
            <div className="pagination-text" style={{ display: "none" }}></div>
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "billing"}>Billing</TabPanel>
      </div>
    </div>
  );
}

export default TabMovie;
