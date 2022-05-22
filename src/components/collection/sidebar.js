import React from "react";
import PropTypes from "prop-types";

SidebarFilter.propTypes = {};

function SidebarFilter(props) {
  return (
    <>
      <div className="sidebar-filter">
        <div className="sidebar-filter_sort">
          <div className="sidebar-sort_mb sidebar-sort_blockone">
            <h6 className="sidebar-comm-title">THEO THỨ TỰ</h6>
            <div className="filter_sort-mb filter_sort-order filter_sort-ascending">
              <input
                type="checkbox"
                id="sort-ascending"
                className="countsortorder"
                data-type="ascending"
              />
              <label for="sort-ascending">Tăng Dần</label>
            </div>
            <div className="filter_sort-mb filter_sort-order filter_sort-ascending">
              <input
                type="checkbox"
                id="sort-descending"
                className="countsortorder"
                data-type="descending"
              />
              <label for="sort-descending">Giảm Dần</label>
            </div>
            <div className="filter_sort-mb filter_sort-order filter_sort-popular">
              <input
                type="checkbox"
                id="sort-popular"
                className="countsortorder"
                data-type="popular"
              />
              <label for="sort-popular">Độ phổ biến</label>
            </div>
            <div className="filter_sort-mb filter_sort-order filter_sort-year">
              <input
                type="checkbox"
                id="sort-year"
                className="countsortorder"
                data-type="year"
              />
              <label for="sort-year">Năm 2022</label>
            </div>
          </div>
          <div className="sidebar-sort_mb sidebar-sort_blocktwo">
            <h6 className="sidebar-comm-title">Quốc Gia</h6>
            <div className="filter_sort-mb filter_sort-country filter_sort-countryusa">
              <input
                type="checkbox"
                id="sortcountryusa"
                className="countsortcountry"
                data-type="usa"
              />
              <label for="sortcountryusa">USA</label>
            </div>
            <div className="filter_sort-mb filter_sort-country filter_sort-countrychina">
              <input
                type="checkbox"
                id="sortcountrychina"
                className="countsortcountry"
                data-type="china"
              />
              <label for="sortcountrychina">CHINA</label>
            </div>
            <div className="filter_sort-mb filter_sort-country filter_sort-countryargentina">
              <input
                type="checkbox"
                id="sortcountryargentina"
                className="countsortcountry"
                data-type="argentina"
              />
              <label for="sortcountryargentina">ARGENTINA</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarFilter;
