import { useEffect, useState } from "react"
import ListaProductos from "./ListaProductos";
import Carrito from "./Carrito";

const Main = () => {

    const [productos, setProductos] = useState([]);
    const [ carrito, setCarrito] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/`)
        .then(resp => resp.json())
        .then(dato => setProductos(dato));
    },[]);

    const agregarAlCarrito = (producto) => {
        if (!carrito.find(p => p.id === producto.id)) {
            setCarrito([...carrito, producto]);
        }
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };
    
  return (
    <main>
        <section>
            <h2>Productos</h2>
            <ListaProductos
                productos={productos}
                carrito={carrito}
                agregarAlCarrito={agregarAlCarrito}
            />
        </section>
        <aside>
            <Carrito productos={carrito} vaciarCarrito={vaciarCarrito} />
        </aside>
    </main> 
  )
}

export default Main