import { useEffect, useState } from 'react'
import Productos from '../components/Productos';
import Carrito from '../components/Carrito';

const Inicio = () => {

    const [productos, setProductos] = useState([]);
    const [ carrito, setCarrito] = useState([]);
    const URL = 'https://fakestoreapi.com/products/'

    useEffect(() => {
        fetch(URL)
        .then(resp => resp.json())
        .then(dato => setProductos(dato));
    },[]);

    const agregarAlCarrito = (producto) => {
        if (!carrito.find(p => p.id === producto.id)) {
            setCarrito([...carrito, producto]);
        }
    };

    const eliminarDelCarrito = (idEliminar) => {
        setCarrito(carrito.filter(producto => producto.id !== idEliminar))
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };
    
  return (
    <main>
        <section>
            <h2>Productos</h2>
            <Productos
                productos={productos}
                carrito={carrito}
                agregarAlCarrito={agregarAlCarrito}
            />
        </section>
        <aside>
            <Carrito 
                productos={carrito} 
                vaciarCarrito={vaciarCarrito} 
                eliminarDelCarrito={eliminarDelCarrito} 
            />
        </aside>
    </main> 
  )
}

export default Inicio