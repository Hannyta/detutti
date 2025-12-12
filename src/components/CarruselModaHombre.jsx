import { useProductosContext } from "../context/ProductosContext";
import CarruselHome from "./CarruselHome";

const CarruselModaHombre = () => {
  const { productos } = useProductosContext();

  const modaHombre = productos.filter((p) =>
    p.categoria?.toLowerCase() === "moda" &&
    p.subCategoria?.toLowerCase?.().includes("hombre")
  );

  return (
    <CarruselHome
      titulo="Productos de moda para hombre"
      productos={modaHombre}
      ruta="/moda"
      id="carouselModaHombre"
    />
  );
};

export default CarruselModaHombre;