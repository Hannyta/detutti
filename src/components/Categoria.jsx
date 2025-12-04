import { useContext } from 'react';
import TarjetaProducto from '../components/TarjetaProducto';
import { CarritoContext } from '../context/CarritoContext';
import { useProductosContext } from '../context/ProductosContext';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import Boton from '../ui/Boton';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { ProductoItem } from '../ui/ProductosLayout';
import { mapProductoToProps } from '../helpers/mapProductoToProps'; // 👈 nuevo helper

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
    gap: 0.5rem;
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
          const productoProps = mapProductoToProps(producto, productosConOferta);

          return (
            <ProductoItem key={producto.id} className="w-100 h-100">
              <TarjetaProducto
                {...productoProps}
                boton={
                  agregado ? (
                    "✅ Agregado"
                  ) : (
                    <Boton
                      onClick={() => {
                        agregarProducto({ ...producto, cantidad: 1 });
                        toast.success(`${producto.nombre} agregado al carrito!`, {
                          position: "bottom-right",
                          autoClose: 2000,
                          hideProgressBar: true,
                          closeOnClick: true,
                          pauseOnHover: false,
                          draggable: false,
                          style: { backgroundColor: "#209ce4", color: "#fff", fontWeight: 600 }
                        });
                      }}
                      aria-label={`Agregar ${producto.nombre} al carrito`}
                    >
                      <FaShoppingCart size={16} />
                      <span>Agregar al carrito</span>
                    </Boton>
                  )
                }
              />
            </ProductoItem>
          );
        })}
      </GridTarjetas>
    </CategoriaSection>
  );
};

export default Categoria