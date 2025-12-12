import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import styled from "styled-components";
import HeroDetutti from "./HeroDetutti";
import heroTecnologia from "../assets/hero-tecnologia.png";
import heroOferta from "../assets/hero-oferta.png";

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

const BannerTecnologia = styled.div`
  width: 100%;
  height: 520px;
  background-image: url(${heroTecnologia});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #af1515ff; 
  cursor: pointer;
`;

const BannerOferta = styled.div`
  width: 100%;
  height: 520px;
  background-image: url(${heroOferta});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #4a99daff; 
  cursor: pointer;
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

          <div className="carousel-item active">
            <HeroDetutti />
          </div>

          <div className="carousel-item">
            <a href="/tecnologia">
              <BannerTecnologia />
            </a>
          </div>

          <div className="carousel-item">
            <a href="/ofertas">
              <BannerOferta />
            </a>
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