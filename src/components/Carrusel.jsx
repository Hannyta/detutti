import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styled from "styled-components";
import HeroDetutti from "./HeroDetutti";
import heroTecnologia from "../assets/hero-tecnologia.png";
import heroOferta from "../assets/hero-oferta.png";
import NieveEffect from "./NieveEffect";

const altura = "400px";

const CarruselWrapper = styled.div`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding: 90px 0 0 0;
  margin-top: 0;
  overflow: hidden;

  .carousel,
  .carousel-inner,
  .carousel-item,
  #carouselExampleIndicators {
    margin: 0;
    padding: 0;
  }

  .carousel-item {
    height: ${altura};
    width: 100vw;
    backface-visibility: hidden;
    will-change: opacity;
    transition: opacity 1.2s ease-in-out !important;
  }

  .carousel-fade .carousel-item {
    opacity: 0;
    position: absolute;
    inset: 0;
    transform: scale(1.02);
  }

  .carousel-fade .carousel-item.active {
    opacity: 1;
    position: relative;
    transform: scale(1);
  }

  .carousel-item > div,
  .carousel-item > a {
    position: relative;
    height: 100%;
    display: block;
  }

  .carousel-inner {
    overflow: hidden;
  }
`;

const BannerTecnologia = styled.div`
  width: 100%;
  height: ${altura};
  background-image: url(${heroTecnologia});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #af1515ff;
  cursor: pointer;
`;

const BannerOferta = styled.div`
  width: 100%;
  height: ${altura};
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
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        data-bs-pause="false"
      >

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">

          {/* SLIDE 1 — HERO */}
          <div className="carousel-item active">
            <div
              style={{
                height: altura,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <NieveEffect />
              <HeroDetutti />
            </div>
          </div>

          {/* SLIDE 2 — TECNOLOGÍA */}
          <div className="carousel-item">
            <a href="/tecnologia">
              <NieveEffect />
              <BannerTecnologia />
            </a>
          </div>

          {/* SLIDE 3 — OFERTAS */}
          <div className="carousel-item">
            <a href="/ofertas">
              <NieveEffect />
              <BannerOferta />
            </a>
          </div>

        </div>

        {/* CONTROLES */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>

      </div>
    </CarruselWrapper>
  );
};

export default Carrusel;