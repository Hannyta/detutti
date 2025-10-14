import { useEffect, useState } from 'react';
import Productos from '../components/Productos';

const Inicio = ({ carrito, agregarAlCarrito}) => {

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
    <>
        <h2>Productos</h2>
        <Productos
            productos={productos}
            carrito={carrito}
            agregarAlCarrito={agregarAlCarrito}
            cargando={cargando}
            error={error}
        />
    </> 
  )
}

export default Inicio