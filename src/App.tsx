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
import PageBreak from "./components/PageBreak";
import Footer from "./components/Footer";

function Home() {
  const navigate = useNavigate();

  const popularCategories = [
    { name: "Dry Peppers", img: "ancho.jpg" },
    { name: "Herbs and Spices", img: "pimienta.jpg" },
    { name: "Rice, Grains & Dried Beans", img: "frijol.jpg" },
    { name: "Beverages", img: "coca.jpg" },
    { name: "Non-edibles", img: "palo-elote.jpg" },
    { name: "Chamoy", img: "deli.jpg" },
    { name: "Mexican Candy", img: "forritos.jpg" },
    { name: "Mexican Chips", img: "sabritas.png" },
  ];

  const featuredProducts = [
    { name: "Dry Guajillo", img: "guajillo.jpg" },
    { name: "Dry Ancho", img: "ancho.jpg" },
    { name: "Garlic", img: "ajo.jpg" },
    { name: "Hibiscus Flower", img: "jamaica.jpg" },
    { name: "Pinto Beans", img: "pinto.jpg" },
    { name: "Mayocoba Beans", img: "mayocoba.jpg" },
    { name: "Corn Husks", img: "hoja.jpg" },
    { name: "Tamarind", img: "tamarindo.jpg" },
  ];

  return (
    <>
      <Carousel />

      <div className="side-menu-container">
        <SideMenu />
        <div className="content">
          <SectionTitle title="Popular Categories" />
          <div className="products-div-container">
            {popularCategories.map(({ name, img }) => (
              <ProductCard
                name={name}
                imgSrc={require(`./assets/photos/${img}`)}
              />
            ))}
          </div>
          <SectionTitle title="Featured Products" />
          <div className="products-div-container">
            {featuredProducts.map(({ name, img }) => (
              <ProductCard
                name={name}
                imgSrc={require(`./assets/photos/${img}`)}
              />
            ))}
          </div>
        </div>
      </div>
      <PageBreak />
      <div className="content">
        <ContactUsSection />
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
      <Footer />
    </>
  );
}

export default App;
