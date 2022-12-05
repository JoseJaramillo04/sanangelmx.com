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

import cBackground from "./assets/photos/pulla.jpg";
import aBackground from "./assets/photos/ajo.jpg";

import "bootstrap/dist/css/bootstrap.min.css"; //Boostrap Import 1/2
import "bootstrap/dist/js/bootstrap.bundle.min"; //Boostrap Import 2/2
import "./homePageStyle.css";
import Header from "./components/Header";

function Home() {
  const navigate = useNavigate();

  const [carrousellI, setCarrousellI] = useState(0);

  const increaseC = () => {
    if (carrousellI + 1 < data.length) setCarrousellI(carrousellI + 1);
    else setCarrousellI(0);
  };

  const decreaseC = () => {
    if (carrousellI - 1 < 0) setCarrousellI(data.length - 1);
    else setCarrousellI(carrousellI - 1);
  };

  const data = [
    {
      name: "Chile Puya",
      desc: "Thrives in the Central Valley of Mexico,",
      moreInfoLink: "#",
      image: cBackground,
    },
    {
      name: "Chile Arbol",
      desc: "Thrives in the Central Valley of Mexico,",
      moreInfoLink: "#",
      image: aBackground,
    },
  ];

  return (
    <>
      {
        <div
          className="carrousell"
          style={{ background: `url(${data[carrousellI].image})` }}
        >
          <div className="arrow-row">
            <img
              alt="left button"
              src={require("./assets/photos/next.png")}
              className="left"
              onClick={decreaseC}
            />
            <img
              alt="right button"
              src={require("./assets/photos/next.png")}
              onClick={increaseC}
            />
          </div>
          <div className="info-container">
            <span className="info-title">{data[carrousellI].name}</span>
            <span className="info-desc">
              {data[carrousellI].desc}
              <a href={data[carrousellI].moreInfoLink} className="info-desc">
                Learn More
              </a>
            </span>
          </div>
        </div>
      }
      <div className="content">Hey</div>
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
