import React, { useEffect, useState } from "react";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import "./App.css";
import "./main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./mainjs";
import HomePage from "./components/Home/index.js";
import Collection from "./components/collection/index.js";
import DetailPage from "./components/Detail/index.js";
import NotFound from "./components/NotFound";
import Footer from "./common/FOOTER/index.js";
import Header from "./common/Header/index.js";
import SearchProduct from "./components/searchProduct.js";
import dataProduct from "./DATA/index";
import axios from "axios";
import SignUp from "./components/Form/SignUp";
import SignIn from "./components/Form/SignIn";
function App() {
  const [data, setData] = useState(dataProduct[0].results);
  const { productUrl } = useParams();
  /*useEffect(() => {
    fetchProducts();
  }, []);*/

  function fetchProducts() {
    const baseURL =
      "https://www.fakerestapi.com/datasets/api/v1/movie-details-dataset.json";
    axios
      .get(baseURL, {
        headers: {
          //https://5df7d1954fdcb20014a484d7.mockapi.io/api/product
          /*Authorization:
            "Bearer DAC0F7C0FE361B6D86CFC6E3A9E87s",
          "Content-Type": "application/json"*/
        },
      })
      .then((response) => {
        var resdata = response.data.data;
        setData(resdata);
        //console.log(resdata);
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }
  //console.log(data);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage data={data} />}></Route>
          <Route
            path="/collections/all"
            element={<Collection data={data} />}
          ></Route>
          <Route
            path="/products/:productId"
            element={<DetailPage data={data} />}
          ></Route>
          <Route
            path="/find/product"
            element={<SearchProduct data={data} />}
          ></Route>
          <Route
            path="/signup"
            element={<SignUp />}
          ></Route>
          <Route
            path="/signin"
            element={<SignIn />}
          ></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
