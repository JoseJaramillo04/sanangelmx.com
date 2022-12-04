import React from "react";
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

import "bootstrap/dist/css/bootstrap.min.css"; //Boostrap Import 1/2
import "bootstrap/dist/js/bootstrap.bundle.min"; //Boostrap Import 2/2
import "./homePageStyle.css";
import Header from "./components/Header";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="carrousell" style={{ background: `url(${cBackground})` }}>
        <div className="arrow-row">
          <a>
            <img
              alt="left button"
              src={require("./assets/photos/next.png")}
              className="left"
            />
          </a>
          <a>
            <img alt="right button" src={require("./assets/photos/next.png")} />
          </a>
        </div>
        <div className="info-container">
          <span className="info-title">Chile Puya</span>
          <span className="info-desc">
            Thrives in the Central Valley of Mexico,
            <a href="/" className="info-desc">
              Learn More
            </a>
          </span>
        </div>
      </div>
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
