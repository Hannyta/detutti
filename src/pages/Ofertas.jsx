import { useState, useEffect } from "react";
import { useProductosContext } from "../context/ProductosContext";
import { useSearch } from "../context/SearchContext";
import TarjetaProducto from "../components/TarjetaProducto";
import Paginador from "../components/Paginador";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  padding: 2rem 0;
`;

const OfertasSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const OfertasTitle = styled.h2`
  font-size: clamp(1.8rem, 2.5vw, 2.2rem);
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.heading};
  letter-spacing: 0.5px;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      #ff4d6d
    );
    margin: 0.6rem auto 0;
    border-radius: 2px;
  }
`;

const Ofertas = () => {
  const { productos } = useProductosContext();
  const { busqueda } = useSearch();

  // Paginación
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 12;

  // Filtrar productos con descuento
  const ofertas = productos.filter((p) => p.descuento > 0);

  // Aplicar búsqueda global
  const resultados = ofertas.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.categoria?.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.subCategoria?.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Resetear página cuando cambia la búsqueda
  useEffect(() => {
    setPaginaActual(1);
  }, [busqueda]);

  // Calcular paginación
  const totalPaginas = Math.ceil(resultados.length / productosPorPagina);
  const indiceInicial = (paginaActual - 1) * productosPorPagina;
  const indiceFinal = indiceInicial + productosPorPagina;

  const productosPaginados = resultados.slice(indiceInicial, indiceFinal);

  return (
    <OfertasSection>
      <Helmet>
        <title>Detutti - Ofertas</title>
        <meta
          name="description"
          content="Explora nuestra selección de ofertas especiales para ti"
        />
      </Helmet>

      <OfertasTitle>Ofertas</OfertasTitle>

      <Grid>
        {productosPaginados.map((producto) => (
          <TarjetaProducto
            key={producto.id}
            id={producto.id}
            imagen={producto.imagen}
            nombre={producto.nombre}
            precio={producto.precio}
            descuento={producto.descuento}
            aplicaCuotas={producto.aplicaCuotas}
            cuotas={producto.cuotas}
            valorCuota={producto.valorCuota}
          />
        ))}
      </Grid>

      {totalPaginas > 1 && (
        <Paginador
          paginaActual={paginaActual}
          totalPaginas={totalPaginas}
          cambiarPagina={setPaginaActual}
        />
      )}
    </OfertasSection>
  );
};

export default Ofertas;