import { useState, useEffect } from "react";
import { useProductosContext } from '../context/ProductosContext';
import { useSearch } from "../context/SearchContext";
import Productos from '../components/Productos';
import Paginador from "../components/Paginador";
import { Helmet } from 'react-helmet-async';
import { InicioMain, TituloSeccion, Mensaje, ErrorBox } from '../ui/InicioLayout';
import Carrusel from "../components/Carrusel";

const Inicio = () => {
  const { productos, cargando, error } = useProductosContext();
  const { busqueda } = useSearch();

  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 12;

  // Resetear página cuando cambia la búsqueda
  useEffect(() => {
    setPaginaActual(1);
  }, [busqueda]);

  // Filtrar por búsqueda
  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.categoria?.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.subCategoria?.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Calcular paginación
  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
  const indiceInicial = (paginaActual - 1) * productosPorPagina;
  const indiceFinal = indiceInicial + productosPorPagina;

  const productosPaginados = productosFiltrados.slice(indiceInicial, indiceFinal);

  // Returns condicionales SIEMPRE después de los hooks
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
    return (
      <ErrorBox aria-live="polite">
        Ocurrió un error al cargar los productos: {error}
      </ErrorBox>
    );
  }

  return (
    <InicioMain>
      <Helmet>
        <title>Detutti - Inicio</title>
        <meta
          name="description"
          content="Explora todos nuestros productos disponibles en Detutti."
        />
      </Helmet>
      <Carrusel/>
      <TituloSeccion>Productos</TituloSeccion>

      {productosFiltrados.length === 0 ? (
        <Mensaje>No se encontraron productos</Mensaje>
      ) : (
        <>
          <Productos
            productos={productosPaginados}
            cargando={cargando}
            error={error}
          />

          <Paginador
            paginaActual={paginaActual}
            totalPaginas={totalPaginas}
            cambiarPagina={setPaginaActual}
          />
        </>
      )}
    </InicioMain>
  );
};

export default Inicio;