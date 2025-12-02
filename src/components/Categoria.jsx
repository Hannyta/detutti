import { useContext } from 'react';
import TarjetaProducto from '../components/TarjetaProducto';
import { CarritoContext } from '../context/CarritoContext';
import { useProductosContext } from '../context/ProductosContext';
import { formatearPrecio } from '../helpers/formatearPrecio';
import styled from "styled-components";
import { Helmet } from "react-helmet";

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

  // Seleccionamos aleatoriamente algunos productos en oferta
  const productosConOferta = productosFiltrados
    .map(p => p.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.ceil(productosFiltrados.length * 0.3));

  if (cargando) return <Estado>Cargando productos...</Estado>;
  if (error) return <Estado>{error}</Estado>;

  return (
    <CategoriaSection>
      <Helmet>
        <title>Detutti - {nombreCategoria}</title>
        <meta name="description" content={`Explora productos de la categoría ${nombreCategoria}`} />
      </Helmet>

      <TitleSection>{nombreCategoria}</TitleSection>
      <GridTarjetas>
        {productosFiltrados.map((producto) => {
          const agregado = carrito.some((p) => p.id === producto.id);
          const enOferta = productosConOferta.includes(producto.id);
          const precioOriginal = enOferta ? producto.precio : null;
          const precioConDescuento = enOferta ? producto.precio * 0.85 : producto.precio;

          return (
            <TarjetaProducto
              key={producto.id}
              id={producto.id}
              img={producto.imagen}
              nombre={producto.nombre}
              precio={
                <>
                  {enOferta && <p style={{ textDecoration: "line-through", color: "#999" }}>{formatearPrecio(precioOriginal)}</p>}
                  <p style={{ fontWeight: "bold", color: "#005BAC" }}>{formatearPrecio(precioConDescuento)}</p>
                </>
              }
              aplicaCuotas={producto.aplicaCuotas}
              cuotas={producto.cuotas}
              valorCuota={producto.valorCuota}
              boton={
                agregado ? "✅ Agregado" : 
                <button aria-label={`Agregar ${producto.nombre} al carrito`}>Agregar 🛒</button>
              }
              onClick={() => agregarProducto({ ...producto, cantidad: 1 })}
            />
          );
        })}
      </GridTarjetas>
    </CategoriaSection>
  );
};

export default Categoria;