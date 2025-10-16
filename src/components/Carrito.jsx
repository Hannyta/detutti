import Boton from './Boton';
import { MdDeleteForever } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Carrito = ({ productos = [], vaciarCarrito, eliminarDelCarrito, usuarioLogueado }) => {

  const navigate = useNavigate();

  const total = productos.reduce((acc, producto) => acc + producto.price, 0);

  const handleCompra = () => {
    if (!usuarioLogueado) {
        alert('Debes iniciar sesión para realizar la compra.');
        navigate('/compra');
        return;
    }

    if (confirm('¿Confirma esta compra?')) {
      alert('¡Muchas gracias por tu compra!');
      vaciarCarrito();
    }
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      {productos.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          {productos.map((producto) => (
            <div className="carrito-item" key={producto.id}>
              <img className="carrito-img" src={producto.image} alt={producto.title} />
              <div>
                <p>{producto.title} - Precio: {producto.price}$ </p>
                <Boton 
                  texto={<MdDeleteForever />}
                  tipo="danger"
                  onClick={() => eliminarDelCarrito(producto.id)}
                />
              </div>
            </div>
          ))}
          <hr />
          <h3>Total: ${total.toFixed(2)}</h3>
          <hr />
          <div className="Botones-carrito">
            <Boton
              texto="Vaciar Carrito"
              tipo="danger-2"
              onClick={() => {
                if (confirm('¿Seguro que querés vaciar el carrito?')) {
                  vaciarCarrito();
                }
              }}
            />
            <Boton
              texto="Comprar"
              tipo="primary"
              onClick={handleCompra}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Carrito;