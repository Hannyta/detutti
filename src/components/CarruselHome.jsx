import TarjetaProducto from "./TarjetaProducto";
import { CarruselHomeLayout as Wrapper } from "../ui/CarruselHomeLayout";
import Boton from "../ui/Boton";
import { Link } from "react-router-dom";

const CarruselHome = ({ titulo, productos, ruta, id }) => {
  let slides = [];

  if (productos.length >= 4) {
    for (let i = 0; i <= productos.length - 4; i++) {
      slides.push(productos.slice(i, i + 4));
    }
  } else {
    slides = [productos];
  }

  return (
    <Wrapper>
      <h2>{titulo}</h2>

      <div
        id={id}
        className="carousel slide carousel-fade"
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
                        {...producto}
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
          data-bs-target={`#${id}`}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      <div className="text-center cta">
        <Link to={ruta} style={{ textDecoration: "none" }}>
          <Boton tipo="primary">Ver todo</Boton>
        </Link>
      </div>
    </Wrapper>
  );
};

export default CarruselHome;