import { useState, useEffect } from "react";
import styled from 'styled-components';
import { useProductosContext } from '../context/ProductosContext';
import { useSearch } from "../context/SearchContext";
import Productos from '../components/Productos';
import Paginador from '../components/Paginador';
import { Helmet } from 'react-helmet-async';
import { InicioMain, Mensaje, ErrorBox } from '../ui/InicioLayout';

const LoaderWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const Title = styled.h2`
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

const TodosProductos = () => {
  const { productos, cargando, error } = useProductosContext();
  const { busqueda } = useSearch();

  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 12;

  useEffect(() => {
    setPaginaActual(1);
  }, [busqueda]);

  const productosFiltrados = productos.filter((p) => {
    const texto = busqueda.toLowerCase();
    return (
      p.nombre?.toLowerCase().includes(texto) ||
      p.categoria?.toLowerCase().includes(texto) ||
      p.subCategoria?.toLowerCase().includes(texto)
    );
  });

  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
  const indiceInicial = (paginaActual - 1) * productosPorPagina;
  const productosPaginados = productosFiltrados.slice(
    indiceInicial,
    indiceInicial + productosPorPagina
  );

  if (cargando) {
    return (
      <LoaderWrapper>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </LoaderWrapper>
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
    <>
      <Helmet>
        <title>Detutti - Todos los productos</title>
        <meta name="description" content="Explora todos los productos disponibles en Detutti." />
      </Helmet>

      <InicioMain>

        <Title>Todos los Productos</Title>

        {productosFiltrados.length === 0 ? (
          <Mensaje>No se encontraron productos</Mensaje>
        ) : (
          <>
            <Productos productos={productosPaginados} />

            <Paginador
              paginaActual={paginaActual}
              totalPaginas={totalPaginas}
              cambiarPagina={setPaginaActual}
            />
          </>
        )}
      </InicioMain>
    </>
  );
};

export default TodosProductos;