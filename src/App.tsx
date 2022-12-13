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
import { featuredProducts, popularCategories } from "./assets/data";

function Home() {
  const navigate = useNavigate();

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
