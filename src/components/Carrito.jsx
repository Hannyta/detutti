import Boton from './Boton';
import { MdDeleteForever } from 'react-icons/md';

const Carrito = ({productos = [], vaciarCarrito, eliminarDelCarrito}) => {

    const total = productos.reduce(( acc, producto) => acc + producto.price, 0);
  
    return (
        <div>
            <h2>Carrito de compras</h2>
            {productos.length === 0 ? (
                <p> No hay productos en el carrito.</p> ) : (
                <>
                    {productos.map((producto, id) =>(
                        <div className="carrito-item" key={id}>
                            <img className="carrito-img" src={producto.image} alt={producto.title} />
                            <div>
                                <p>{producto.title} - Precio: {producto.price}$ </p>
                                <Boton 
                                    texto={<MdDeleteForever />}
                                    tipo="danger"
                                    onClick={() => {
                                        eliminarDelCarrito(producto.id);
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                    <hr />
                    <h3>Total: ${total.toFixed(2)}</h3>
                    <hr />
                    <Boton
                        texto="Vaciar Carrito"
                        tipo="alt"
                        onClick={() => {
                            if (confirm('¿Seguro que querés vaciar el carrito?')) {
                                vaciarCarrito();
                            }}
                        }
                    />
                </>
                )
            }
        </div>
    )
}

export default Carrito
