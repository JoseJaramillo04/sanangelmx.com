import React from "react";
import "./App.css";
import { useNavigate, Route, BrowserRouter, Routes } from "react-router-dom";

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
import Category from "./components/Screens/Category";
import Contact from "./components/Screens/Contact";

function Home() {
  const navigate = useNavigate();

  const popularCategories = [
    {
      name: "Dry Peppers",
      img: "licensed/ancho-small.webp",
      categoryId: "KWX2HY75G7RDE",
    },
    {
      name: "Herbs and Spices",
      img: "licensed/pimienta-small.webp",
      categoryId: "EZP1K61ZYDWT6",
    },
    {
      name: "Grains, Cereals, Seeds and Beans",
      img: "licensed/grains-small.webp",
      categoryId: "JK00BXF5QSRQ0",
    },
    {
      name: "Beverages",
      img: "licensed/mexican-coke.webp",
      categoryId: "952RKV8KRRCY6",
    },
    {
      name: "Plastic bags",
      img: "licensed/rollo-bolsa.webp",
      categoryId: "MY4JG6CAKZJCT",
    },
    {
      name: "Hot Sauce, Chamoy, artificial food flavors",
      img: "photos/deli.jpg",
      categoryId: "ZV0NZ0EBTWFCJ",
    },
    {
      name: "Mexican Candy",
      img: "photos/forritos.jpg",
      categoryId: "15XX57BC1V85J",
    },
    {
      name: "Mexican Chips",
      img: "photos/sabritas.png",
      categoryId: "F94R6P2FK902C",
    },
  ];

  const featuredProducts = [
    { name: "Dry Guajillo", img: "licensed/guajillo-small.webp" },
    { name: "Dry Ancho", img: "licensed/ancho-small.webp" },
    { name: "Garlic", img: "licensed/garlic-small.webp" },
    { name: "Hibiscus Flower", img: "licensed/jamaica-small.webp" },
    { name: "Pinto Beans", img: "licensed/pinto-small.webp" },
    { name: "Mayocoba Beans", img: "licensed/mayocoba-small.webp" },
    { name: "Corn Husks", img: "photos/hoja.jpg" },
    { name: "Tamarind", img: "licensed/tamarind-small.webp" },
  ];

  return (
    <>
      <Carousel />
      <div className="side-menu-container">
        <SideMenu />
        <div className="content">
          <SectionTitle title="Popular Categories" />
          <div className="products-div-container">
            {popularCategories.map(({ name, img, categoryId }) => (
              <ProductCard
                key={"product-card" + name}
                name={name}
                imgSrc={require(`./assets/${img}`)}
                categoryId={categoryId}
              />
            ))}
          </div>
          <SectionTitle title="Featured Products" />
          <div className="products-div-container">
            {featuredProducts.map(({ name, img }) => (
              <ProductCard
                key={"product-card-featured" + name}
                name={name}
                imgSrc={require(`./assets/${img}`)}
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <div className="Application">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
