import { useProductosContext } from "../context/ProductosContext";
import CarruselHome from "./CarruselHome";

const CarruselModaMujer = () => {
  const { productos } = useProductosContext();

  const modaMujer = productos.filter((p) =>
    p.categoria?.toLowerCase() === "moda" &&
    p.subCategoria?.toLowerCase?.().includes("mujer")
  );

  return (
    <CarruselHome
      titulo="Productos de moda para mujer"
      productos={modaMujer}
      ruta="/moda"
      id="carouselModaModa"
    />
  );
};

export default CarruselModaMujer;