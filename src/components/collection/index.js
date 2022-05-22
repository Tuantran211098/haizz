import PropTypes from "prop-types";
import $ from "jquery";
import React, { useState } from "react";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
import "./../../main.js";

import Iconquickview from "./../Home/imagepartner/iconquiclview.png";
import ModalQuickView from "./modalQuickview.js";
import SidebarFilter from "./sidebar.js";
Collection.propTypes = {
  data: PropTypes.array,
};
Collection.defaultProps = {
  data: [],
};
function Collection(props) {
  const { data } = props;
  const [dataQuickView, setDataQuickView] = useState([]);
  //console.log("do", dataQuickView);
  function handleQuickView(data) {
    setDataQuickView(data);
    //console.log("data", data);
    //var $items = $(".mini-carousel ul");
    //var $linkClick = $(".mini-carousel ul li a");
    //$(".video-player").hide();
    $("html, body").animate({ scrollTop: 0 });
    $("#quick-view-pop-up").removeAttr("display:none").fadeToggle();
    $("#quick-view-pop-up").css({ top: "20%", left: "314px" });
    $(".mask").fadeToggle();
    $(".mask").on("click", function () {
      $(".mask").fadeOut();
      $("#quick-view-pop-up").fadeOut();
    });
    /*$(".quick-view-close").on("click", function () {
      $(".mask").fadeOut();
      $("#quick-view-pop-up").fadeOut();
    });*/
  }
  const todosPerPage = 10;
  const [activePage, setCurrentPage] = useState(1);
  // Logic for displaying current todos
  const indexOfLastTodo = activePage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo);

  const renderTodos = currentTodos.map((data, index) => {
    /*const myData = {
      name: data.name,
      description: data.description,
    };*/
    return (
      <>
        <div
          key={data.id}
          className="col-lg-2 col-md-2 col-sm-6 col-xs-6 position-relative"
        >
          <div className="wrap-collection_result">
          <div className="item-slide-img">
            {
              data.image.length > 1 ? (
                <>
                <img src={data.image[0].stt} className="collection_result-img slide-img-one"/>
                <img src={data.image[1].stt} className="collection_result-img slide-img-two"/></>
              ) : <img src={data.image[0].stt} className="collection_result-img slide-img-one"/>
            }
            </div>
            <div className="collection_body">
              <h5 className="collection_body-title">{data.title}</h5>
              <p className="collection_body-des">{data.description}</p>
              <h3 className="collection_body-price">{data.price}</h3>
              <Link
                to={`/products/${data.uuid}`}
                state={data}
                className="collection_body-link"
              >
                Xem chi tiet
              </Link>
            </div>
          </div>
          <div className="quick-view-controller icon-quickview">
            <img
              className="btn-view"
              src={Iconquickview}
              onClick={() => handleQuickView(data)}
              alt={`xem nhanh sản phẩm${data.title}`}
            />
          </div>
        </div>
      </>
    );
  });
  function ToggleNav() {
    /* create variables to reduce typing and space */
    var sidenav = document.getElementById("sidenav") /* sidebar menu */,
      chevron =
        document.getElementById(
          "chevron"
        ) /* this is the double chevron element housed in the span */,
      btn =
        document.getElementById(
          "openBtn"
        ) /* this is the button that houses the double chevron */,
      ariaValue = btn.getAttribute("aria-expanded");

    /* ternary operators are used to determine what the attribute value is and sets then changes the value accordingly */
    sidenav.style.width =
      sidenav.style.width === "175px"
        ? "0"
        : "175px"; /* if you want a wider sidebar menu, change both of the 175px */
    chevron.style.transform =
      chevron.style.transform === "rotate(-180deg)"
        ? "rotate(0deg)"
        : "rotate(-180deg)"; /* rotates the double chevron to indicate the direction the menu will go when clicked */
    btn.style.width =
      btn.style.width === "215px"
        ? "40px"
        : "215px"; /* moves the chevron button out/in with the sidebar menu.  If the button width or the sidebar menu width are changed, the numbers will need to be updated accordingly.  40px is the button's width, 215 is the button's width plus the sidebar menu width */

    /* for screenreaders: lets the user know if the menu is expanded (open) */
    ariaValue =
      ariaValue === "true"
        ? btn.setAttribute("aria-expanded", "false")
        : btn.setAttribute("aria-expanded", "true");
  }
  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    $(".pagination-text").text(`page ${pageNumber}`);
    setCurrentPage(pageNumber);
  };

  return (
    <div className="collections-page" id="collections-page">
      <div className="collections-page_filter">
        <nav id="sidenav" className="sidenavbar">
          <SidebarFilter />
        </nav>
        <button
          aria-expanded="false"
          className="openbtn"
          id="openBtn"
          aria-label="mobile navigation"
          onClick={() => ToggleNav()}
        >
          <span id="chevron">&raquo;</span>
        </button>
      </div>
      <div className="common-margin collections-page_result">
        <div className="container">
          <div className="common-title">
            <h3>
              <span>SẢN PHẨM NỘI BẬT</span>
            </h3>
          </div>
          <div className="row" id="container">
            {renderTodos}
          </div>
          <div className="pagination">
            <Pagination
              activePage={activePage}
              itemsCountPerPage={todosPerPage}
              totalItemsCount={data.length}
              onChange={handlePageChange}
              prevPageText="&#8592;"
              nextPageText="&#8594;"
            />
            <div className="pagination-text"></div>
          </div>
        </div>
      </div>
      <div className="modal-quickview">
        <ModalQuickView dataQuickView={dataQuickView} />
      </div>
    </div>
  );
}

export default Collection;
