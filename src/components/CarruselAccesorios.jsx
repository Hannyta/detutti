import { useProductosContext } from "../context/ProductosContext";
import TarjetaProducto from "./TarjetaProducto";
import { CarruselHomeLayout as Wrapper } from "../ui/CarruselHomeLayout";
import Boton from "../ui/Boton";
import { Link } from "react-router-dom";

const CarruselAccesorios = () => {
  const { productos } = useProductosContext();

  const accesorios = productos.filter((p) => {
    const cat = p.categoria?.toLowerCase?.() || "";
    const sub = p.subCategoria?.toLowerCase?.() || "";
    return (
      cat === "accesorios" ||
      sub.includes("accesorio") ||
      cat.includes("accesorio")
    );
  });

  let slides = [];
  if (accesorios.length >= 4) {
    for (let i = 0; i <= accesorios.length - 4; i++) {
      slides.push(accesorios.slice(i, i + 4));
    }
  } else {
    slides = [accesorios];
  }

  return (
    <Wrapper>
      <h2>Accesorios</h2>

      <div
        id="carouselAccesorios"
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
          data-bs-target="#carouselAccesorios"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselAccesorios"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      <div className="text-center cta">
        <Link to="/accesorios" style={{ textDecoration: "none" }}>
          <Boton tipo="primary">Ver Accesorios</Boton>
        </Link>
      </div>
    </Wrapper>
  );
};

export default CarruselAccesorios;