import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Boton from "../components/Boton";
import { CarritoContext } from "../context/CarritoContext";
import { useProductosContext } from "../context/ProductosContext"; 
import { formatearPrecio } from "../helpers/formatearPrecio"; 

// 👉 Importamos los styled-components desde DetalleLayout.jsx
import { 
  DetalleContainer, Galeria, ImagenPrincipal, InfoProducto, Titulo, 
  PrecioBox, PrecioFinal, CuotasPromo, BloqueMagenta, BloqueAzul, 
  Acciones, CantidadSelector, BtnCantidad, Cantidad, Mensaje, 
  Descripcion, InfoExtra 
} from "../ui/DetalleLayout";

const ProductoDetalle = () => {
  const { id } = useParams();
  const { productos, cargando, error } = useProductosContext();
  const { agregarProducto } = useContext(CarritoContext);

  const producto = productos.find(p => String(p.id) === id);
  const [cantidad, setCantidad] = useState(1);
  const [mensaje, setMensaje] = useState("");

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  const aumentar = () => setCantidad(prev => prev + 1);
  const disminuir = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

  const handleAgregar = () => {
    agregarProducto({ ...producto, cantidad });
    setMensaje("Producto agregado al carrito 🛒");
    setTimeout(() => setMensaje(""), 2000);
  };

  return (
    <DetalleContainer>
      <Galeria>
        <ImagenPrincipal 
          src={producto.imagen} 
          alt={`Imagen de ${producto.nombre}`} 
        />
      </Galeria>

      <InfoProducto>
        <Titulo>{producto.nombre}</Titulo>

        <PrecioBox>
          <PrecioFinal>{formatearPrecio(producto.precio)}</PrecioFinal>

          {producto.aplicaCuotas && producto.cuotas && producto.valorCuota && (
            <CuotasPromo>
              <BloqueMagenta>{producto.cuotas} cuotas</BloqueMagenta>
              <BloqueAzul>
                sin interés de {formatearPrecio(producto.valorCuota)}
              </BloqueAzul>
            </CuotasPromo>
          )}
        </PrecioBox>

        <Acciones>
          <CantidadSelector>
            <BtnCantidad onClick={disminuir} aria-label="Disminuir cantidad">-</BtnCantidad>
            <Cantidad>{cantidad}</Cantidad>
            <BtnCantidad onClick={aumentar} aria-label="Aumentar cantidad">+</BtnCantidad>
          </CantidadSelector>

          <Boton
            texto="Agregar al carrito 🛒"
            onClick={handleAgregar}
            tipo="primary"
          />
        </Acciones>

        {mensaje && <Mensaje aria-live="polite">{mensaje}</Mensaje>}

        <Descripcion>
          <h4>Descripción del producto</h4>
          <p>{producto.descripcion}</p>
        </Descripcion>

        <InfoExtra>
          <p><strong>Categoría:</strong> {producto.categoria}</p>
          <p><strong>Subcategoría:</strong> {producto.subCategoria}</p>
        </InfoExtra>
      </InfoProducto>
    </DetalleContainer>
  );
};

export default ProductoDetalle;