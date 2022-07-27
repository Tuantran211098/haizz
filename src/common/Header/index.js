import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
Header.propTypes = {};

function Header(props) {
  return (
    <>
      <header id="site-header">
        <div id="site-header-container">
          <div id="site-header-logo">
            <img
              src="https://github.com/taviskaron/t-div-headers/blob/main/img/logo3.png?raw=true"
              alt=""
            />
          </div>

          <input
            type="checkbox"
            className="toggleSideMenu"
            id="toggleSideMenu"
            autoComplete="off"
          />
          <label for="toggleSideMenu" className="hamburger-icon">
            <div className="hamburger-menu-line diagonal-1"></div>
            <div className="hamburger-menu-line horizontal"></div>
            <div className="hamburger-menu-line diagonal-2"></div>
          </label>

          <div id="side-menu-container">
            <div id="before-side-menu">
              <span>Menu</span>
            </div>
            <nav id="top-menu">
              <ul id="main-menu">
                <li className="main-menu-item">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="main-menu-item">
                  <Link to={"/about"}>About</Link>
                </li>
                <li className="main-menu-item">
                  <Link to={"/catalogue"}>Catalogue</Link>
                </li>
                <li className="main-menu-item">
                  <Link to={"/delivery"}>Delivery</Link>
                </li>
                <li className="main-menu-item">
                  <Link to={"/blog"}>Blog</Link>
                </li>
                <li className="main-menu-item">
                  <Link to={"/contact"}>Contact us</Link>
                </li>
              </ul>
            </nav>
            <div id="after-side-menu">
              <span>SHARE SOCIAL</span>
              <div className="social-buttons">
                <i className="icon-linkedin">
                  <img
                    alt="linkedin"
                    className="icon-header"
                    src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"
                  />
                </i>
                <i className="icon-facebook-squared">
                  <img
                    alt="facebook"
                    className="icon-header"
                    src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook.png"
                  />
                </i>
                <i className="icon-vkontakte">
                  <img
                    alt="vkontakte"
                    className="icon-header"
                    src="https://img.icons8.com/ios-glyphs/30/ffffff/vkontakte.png"
                  />
                </i>
                <i className="icon-twitter">
                  <img
                    alt="twitter"
                    className="icon-header"
                    src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter.png"
                  />
                </i>
              </div>
            </div>
          </div>

          <div id="site-header-search">
            <div id="site-header-search-container">
              <form action="/find/product" autocomplete="on">
                <input
                  id="search"
                  name="search"
                  type="text"
                  placeholder="Search..."
                />
                <button id="search_submit" type="submit">
                  <img
                    alt="search"
                    className="icon-header"
                    src="https://img.icons8.com/ios-glyphs/20/666666/search--v1.png"
                  />
                </button>
              </form>
            </div>
          </div>

          <div id="site-header-auth-container">
            <button
              id="site-header-login-button"
              className="site-header-auth-button"
            >
              <i className="icon-logout">
                <img
                  alt="login"
                  className="icon-header"
                  src="https://img.icons8.com/ios-filled/18/666666/login-rounded-right.png"
                />
              </i>
              <Link to="/signin"><span>Log in</span></Link>
            </button>
            <button
              id="site-header-registration-button"
              className="site-header-auth-button"
            >
              <i className="icon-user">
                <img
                  alt="user"
                  className="icon-header"
                  src="https://img.icons8.com/ios-glyphs/18/666666/user--v1.png"
                />
              </i>
              <span>Register</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
