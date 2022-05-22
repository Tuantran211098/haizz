import { Router, Route, browserHistory } from "react-router";
import React from "react";
import App from "./App";
import HomePage from "./components/Home/index.js";
import DetailPage from "./components/Detail/index.js";
import NotFound from "./components/NotFound";
export default (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={HomePage} />
      <Route path="/product/:productId" component={DetailPage} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);
