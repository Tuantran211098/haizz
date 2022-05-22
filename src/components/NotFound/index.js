import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
NotFound.propTypes = {};

function NotFound(props) {
  return (
    <div className="page-notfound">
      <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class="col-sm-12 text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>

                <div class="contant_box_404">
                  <h3 class="h2">Look like you're lost</h3>

                  <p>the page you are looking for not avaible!</p>

                  <Link to={"/"}>GO TO HOME</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
