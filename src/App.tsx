import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  useNavigate,
  Route,
  HashRouter,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"; //Boostrap Import 1/2
import "bootstrap/dist/js/bootstrap.bundle.min"; //Boostrap Import 2/2
import "./homePageStyle.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import SectionTitle from "./components/SectionTitle";
import SideMenu from "./components/SideMenu";
import ProductCard from "./components/ProductCard";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Carousel />

      <div className="side-menu-container">
        <SideMenu />
        <div className="content">
          <div className="fair-spacing" />
          <SectionTitle title="Popular Categories" />
          <div className="products-div-container">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="Application">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
