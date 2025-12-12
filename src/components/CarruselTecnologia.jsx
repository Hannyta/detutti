import { useProductosContext } from "../context/ProductosContext";
import CarruselHome from "./CarruselHome";

const CarruselTecnologia = () => {
  const { productos } = useProductosContext();

  const tecnologia = productos.filter((p) => {
    const cat = p.categoria?.toLowerCase?.() || "";
    const sub = p.subCategoria?.toLowerCase?.() || "";
    return (
      cat === "tecnologia" ||
      cat === "tecnología" ||
      sub.includes("tec") ||
      cat.includes("electr")
    );
  });

  return (
    <CarruselHome
      titulo="Tecnología"
      productos={tecnologia}
      ruta="/tecnologia"
      id="carouselTecnologia"
    />
  );
};

export default CarruselTecnologia;