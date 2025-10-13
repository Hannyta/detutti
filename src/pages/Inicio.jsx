import { useEffect, useState } from 'react';
import Productos from '../components/Productos';
import Carrito from '../components/Carrito';

const Inicio = ({ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito}) => {

    const [productos, setProductos] = useState([]);
    const [ error, setError] = useState(null);
    const [ cargando, setCargando] = useState(true)

    const URL = 'https://fakestoreapi.com/products/'

    useEffect(() => {
        fetch(URL)
        .then(resp => resp.json())
        .then(dato => {
            setProductos(dato);
            setCargando(false);
        })
        .catch((error) => {
            setError('Error al cargar productos');
            setCargando(false);
        })
    },[]);
    
  return (
    <main>
        <section>
            <h2>Productos</h2>
            <Productos
                productos={productos}
                carrito={carrito}
                agregarAlCarrito={agregarAlCarrito}
                cargando={cargando}
                error={error}
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