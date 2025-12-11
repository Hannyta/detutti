import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import styled from "styled-components";
import HeroDetutti from "./HeroDetutti";

const CarruselWrapper = styled.div`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding: 90px 0 0 0;
  margin-top: 0;

  .carousel,
  .carousel-inner,
  .carousel-item,
  #carouselExampleIndicators {
    margin: 0;
    padding: 0;
  }
`;

const Carrusel = () => {
  return (
    <CarruselWrapper>
      <div id="carouselExampleIndicators" className="carousel slide">

        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">

          {/* SLIDE 1 */}
          <div className="carousel-item active">
            <HeroDetutti />
          </div>

          {/* SLIDE 2 */}
          <div className="carousel-item">
            <a href="/tecnologia">
              <img
                src="/assets/hero-tecnologia.png"
                className="d-block w-100"
                alt="6 cuotas sin interés en tecnología"
              />
            </a>
          </div>

          {/* SLIDE 3 */}
          <div className="carousel-item">
            <img
              src="/assets/carrusel1.jpg"
              className="d-block w-100"
              alt="Slide 1"
            />
          </div>

        </div>

        {/* CONTROLES */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>

      </div>
    </CarruselWrapper>
  );
};

export default Carrusel;