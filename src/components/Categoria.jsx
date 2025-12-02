import { useContext } from 'react';
import TarjetaProducto from '../components/TarjetaProducto';
import { CarritoContext } from '../context/CarritoContext';
import { useProductosContext } from '../context/ProductosContext';
import { formatearPrecio } from '../helpers/formatearPrecio';
import styled from "styled-components";

const CategoriaSection = styled.section`
  margin: 3rem auto;
  padding: 0 1rem;
  max-width: 1300px;
`;

const TitleSection = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const GridTarjetas = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  list-style: none;
  padding: 0;

  @media (min-width: 1500px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (max-width: 360px) {
    grid-template-columns: 1fr;
  }
`;

const Estado = styled.div`
  text-align: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Categoria = ({ nombreCategoria, categoriaAPI, subCategoriaAPI }) => {
  const { carrito, agregarProducto } = useContext(CarritoContext);
  const { productos, cargando, error } = useProductosContext();

  const productosFiltrados = productos.filter(
    (p) =>
      p.categoria?.toLowerCase() === categoriaAPI.toLowerCase() &&
      (!subCategoriaAPI || p.subCategoria?.toLowerCase() === subCategoriaAPI.toLowerCase())
  );

  if (cargando) return <Estado>Cargando productos...</Estado>;
  if (error) return <Estado>{error}</Estado>;

  return (
    <CategoriaSection>
      <TitleSection>{nombreCategoria}</TitleSection>
      <GridTarjetas>
        {productosFiltrados.map((producto) => {
          const agregado = carrito.some((p) => p.id === producto.id);
          return (
            <TarjetaProducto
              key={producto.id}
              id={producto.id}
              img={producto.imagen}
              nombre={producto.nombre}
              precio={formatearPrecio(producto.precio)}
              aplicaCuotas={producto.aplicaCuotas}
              cuotas={producto.cuotas}
              valorCuota={producto.valorCuota}
              boton={agregado ? '✅ Agregado' : 'Agregar 🛒'}
              onClick={() => agregarProducto({ ...producto, cantidad: 1 })}
            />
          );
        })}
      </GridTarjetas>
    </CategoriaSection>
  );
};

export default Categoria;