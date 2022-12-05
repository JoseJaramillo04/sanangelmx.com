import { useState } from "react";
import "../css/carousel.css";
import cPulla from "../assets/photos/pulla.jpg";

function Carousel() {
  const data = [
    {
      name: "Chile Puya",
      desc: "Thrives in the Central Valley of Mexico,",
      moreInfoLink: "#",
      image: cPulla,
    },
    {
      name: "Purple Garlic",
      desc: "Thrivdfdes in the Central Valley of Mexico,",
      moreInfoLink: "#",
      image: cPulla,
    },
    {
      name: "Spices",
      desc: "ff in the Central Valley of Mexico,",
      moreInfoLink: "#",
      image: cPulla,
    },
    {
      name: "Chile Arbol",
      desc: "ff in the Central Valley of Mexico,",
      moreInfoLink: "#",
      image: cPulla,
    },
    {
      name: "Jamaica",
      desc: "ff in the Central Valley of Mexico,",
      moreInfoLink: "#",
      image: cPulla,
    },
  ];

  return (
    <>
      <div className="content">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              data-bs-interval="9000"
              key={data[0].name}
            >
              <img
                src={data[0].image}
                className="d-block w-100"
                alt={data[0].name}
              />
              <div className="info-container">
                <span className="info-title">{data[0].name}</span>
                <span className="info-desc">
                  {data[0].desc}
                  <a href={data[0].moreInfoLink} className="info-desc">
                    Learn More
                  </a>
                </span>
              </div>
            </div>

            {data.slice(1).map(({ name, desc, moreInfoLink, image }) => (
              <div className="carousel-item" data-bs-interval="9000" key={name}>
                <img src={image} className="d-block w-100" alt={name} />
                <div className="info-container">
                  <span className="info-title">{name}</span>
                  <span className="info-desc">
                    {desc}
                    <a href={moreInfoLink} className="info-desc">
                      Learn More
                    </a>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
