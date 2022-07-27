import { Router, Route, browserHistory } from "react-router";
import React from "react";
import App from "./App";
import HomePage from "./components/Home/index.js";
import DetailPage from "./components/Detail/index.js";
import NotFound from "./components/NotFound";
import Logout from "./components/Form/Logout";
import SearchProduct from "./components/searchProduct.js";
export default (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" exact component={HomePage} />
      <Route path="/product/:productId" component={DetailPage} />
      <Route path="/logout" component={LogOut} />
      <Route path="/search" component={SearchProduct} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);
