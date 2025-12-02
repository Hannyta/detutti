import { useProductosContext } from "../context/ProductosContext";
import Productos from "../components/Productos";
import { Helmet } from "react-helmet";
import { InicioMain, TituloSeccion, Mensaje, ErrorBox } from "../ui/InicioLayout";

const Inicio = () => {
  const { productos, cargando, error } = useProductosContext();

  if (cargando) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <ErrorBox aria-live="polite">Ocurrió un error al cargar los productos: {error}</ErrorBox>;
  }

  return (
    <InicioMain>
      <Helmet>
        <title>Detutti - Inicio</title>
        <meta name="description" content="Explora todos nuestros productos disponibles en Detutti." />
      </Helmet>

      <TituloSeccion>Productos</TituloSeccion>
      {productos.length === 0 ? (
        <Mensaje>No hay productos disponibles</Mensaje>
      ) : (
        <Productos productos={productos} cargando={cargando} error={error} />
      )}
    </InicioMain>
  );
};

export default Inicio;