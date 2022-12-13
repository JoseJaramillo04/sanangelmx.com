import "../css/carousel.css";
import { carouselData } from "../assets/data";

function Carousel() {
  return (
    <>
      <div className="carousel-content">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              data-bs-interval="9000"
              key={carouselData[0].name}
            >
              <img
                loading="eager"
                src={carouselData[0].image}
                className="d-block w-100"
                alt={carouselData[0].name}
              />
              <div className="info-container">
                <span className="info-title">{carouselData[0].name}</span>
                <span className="info-desc">
                  {carouselData[0].desc + " "}
                  <a
                    href={carouselData[0].moreInfoLink}
                    className="info-desc-link"
                  >
                    Learn More
                  </a>
                </span>
              </div>
            </div>

            {carouselData
              .slice(1)
              .map(({ name, desc, moreInfoLink, image }) => (
                <div
                  className="carousel-item"
                  data-bs-interval="9000"
                  key={name}
                >
                  <img
                    loading="eager"
                    src={image}
                    className="d-block w-100"
                    alt={name}
                  />
                  <div className="info-container">
                    <span className="info-title">{name}</span>
                    <span className="info-desc">
                      {desc + " "}
                      <a href={moreInfoLink} className="info-desc-link">
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
