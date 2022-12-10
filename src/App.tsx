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
import ContactUsSection from "./components/ContactUsSection";
import Products from "./components/Screens/Products";

function Home() {
  const navigate = useNavigate();

  const popularCategories = [
    { name: "Dry Peppers", img: "ancho.jpg", categoryId: "KWX2HY75G7RDE" },
    {
      name: "Herbs and Spices",
      img: "pimienta.jpg",
      categoryId: "EZP1K61ZYDWT6",
    },
    {
      name: "Grains, Cereals, Seeds and Beans",
      img: "frijol.jpg",
      categoryId: "JK00BXF5QSRQ0",
    },
    { name: "Beverages", img: "coca.jpg", categoryId: "952RKV8KRRCY6" },
    {
      name: "Plastic bags",
      img: "palo-elote.jpg",
      categoryId: "MY4JG6CAKZJCT",
    },
    {
      name: "Hot Sauce, Chamoy, artificial food flavors",
      img: "deli.jpg",
      categoryId: "ZV0NZ0EBTWFCJ",
    },
    { name: "Mexican Candy", img: "forritos.jpg", categoryId: "15XX57BC1V85J" },
    { name: "Mexican Chips", img: "sabritas.png", categoryId: "F94R6P2FK902C" },
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
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
