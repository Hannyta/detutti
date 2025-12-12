import { useProductosContext } from "../context/ProductosContext";
import TarjetaProducto from "../components/TarjetaProducto";
import styled from "styled-components";
import Boton from "../ui/Boton";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  padding: 3rem 0;
  background: #f8f9fa;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 700;
    font-size: clamp(1.6rem, 2vw, 2rem);
  }

  .slide-group {
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 0 12px;
  }

  .tarjeta-wrapper {
    width: 280px;
    height: 300px;
    display: flex;
    align-items: stretch;
    margin: 0 1px;
    flex-shrink: 0;
  }

  .tarjeta-wrapper img {
    width: 140px !important;
    height: 140px !important;
  }

  .tarjeta-wrapper h3 {
    font-size: 0.9rem !important;
    line-height: 1.2;
  }

  .tarjeta-wrapper .cuotas {
    transform: scale(0.9);
    transform-origin: left;
  }

  .carousel-item {
    animation: fadeIn 0.4s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* ✅ Flechas ocultas por defecto, visibles al hacer hover */
  #carouselDestacados .carousel-control-prev,
  #carouselDestacados .carousel-control-next {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  #carouselDestacados:hover .carousel-control-prev,
  #carouselDestacados:hover .carousel-control-next {
    opacity: 1;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    padding: 10px;
  }

  .carousel-control-prev,
  .carousel-control-next {
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 768px) {
    .slide-group {
      flex-wrap: nowrap;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
    }

    .tarjeta-wrapper {
      scroll-snap-align: center;
    }
  }
`;

const CarruselDestacados = () => {
  const { productos } = useProductosContext();

  const ofertas = productos.filter((p) => p.descuento > 0);

  // ✅ Mostrar 4 tarjetas pero avanzar de a 1
  let slides = [];

  if (ofertas.length >= 4) {
    for (let i = 0; i <= ofertas.length - 4; i++) {
      slides.push(ofertas.slice(i, i + 4));
    }
  } else {
    slides = [ofertas];
  }

  return (
    <Wrapper>
      <h2>Productos destacados</h2>

      <div
        id="carouselDestacados"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div className="carousel-inner">
          {slides.map((grupo, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="slide-group">
                {grupo.map((producto) => {
                  const valorCuotaNormalizado = Array.isArray(producto.valorCuota)
                    ? producto.valorCuota[0]
                    : producto.valorCuota;

                  return (
                    <div className="tarjeta-wrapper" key={producto.id}>
                      <TarjetaProducto
                        id={producto.id}
                        imagen={producto.imagen}
                        nombre={producto.nombre}
                        precio={producto.precio}
                        descuento={producto.descuento}
                        aplicaCuotas={producto.aplicaCuotas}
                        cuotas={producto.cuotas}
                        valorCuota={valorCuotaNormalizado}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselDestacados"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselDestacados"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      <div className="text-center mt-4">
        <Link to="/ofertas" style={{ textDecoration: "none" }}>
          <Boton tipo="primary" ariaLabel="Ver todas las ofertas">
            Ver todas las ofertas
          </Boton>
        </Link>
      </div>
    </Wrapper>
  );
};

export default CarruselDestacados