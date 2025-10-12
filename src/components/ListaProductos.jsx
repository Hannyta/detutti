import TarjetaProducto from "./TarjetaProducto";

const ListaProductos = ({ productos, carrito, agregarAlCarrito }) => {
    if (!productos.length) return <p>Cargando Productos...</p>;

  return (
    <ul>
        {productos.map(producto => (
            <li key={producto.id}>
                <TarjetaProducto
                    img={producto.image}
                    nombre={producto.title}
                    precio={producto.price}
                    boton={carrito.find(p => p.id === producto.id) ? '✅ Agregado' : 'Agregar'}
                    onClick={()=> agregarAlCarrito(producto)}
                />
            </li>
        ))}
    </ul>
  )
}

export default ListaProductos
