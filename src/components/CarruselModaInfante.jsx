import { useProductosContext } from "../context/ProductosContext";
import CarruselHome from "./CarruselHome";

const CarruselModaInfante = () => {
  const { productos } = useProductosContext();

  const modaInfante = productos.filter((p) => {
    const sub = p.subCategoria?.toLowerCase?.() || "";
    return (
      p.categoria?.toLowerCase() === "moda" &&
      (sub.includes("infant") ||
        sub.includes("niño") ||
        sub.includes("niña") ||
        sub.includes("bebe") ||
        sub.includes("kids"))
    );
  });

  return (
    <CarruselHome
      titulo="Productos de moda para niños y niñas"
      productos={modaInfante}
      ruta="/moda"
      id="carouselModaInfante"
    />
  );
};

export default CarruselModaInfante;