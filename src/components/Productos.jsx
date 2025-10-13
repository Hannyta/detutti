import TarjetaProducto from './TarjetaProducto';

const Productos = ({ productos, carrito, agregarAlCarrito, error, cargando }) => {
    if (cargando) return <p>Cargando Productos...</p>
    if (error) return <p>{error}</p>

  return (
    <ul>
        {productos.map(producto => (
            <li key={producto.id}>
                <TarjetaProducto
                    id={producto.id}
                    img={producto.image}
                    nombre={producto.title}
                    precio={producto.price}
                    boton={carrito.find(p => p.id === producto.id) ? '✅ Agregado' : 'Agregar 🛒'}
                    onClick={()=> agregarAlCarrito(producto)}
                />
            </li>
        ))}
    </ul>
  )
}

export default Productos
