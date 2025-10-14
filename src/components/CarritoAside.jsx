import { IoMdClose } from 'react-icons/io';
import Carrito from './Carrito';


const CarritoAside = ({ productos, cerrarAside, vaciarCarrito, eliminarDelCarrito}) => {

  return (
    <aside className="aside-carrito" id="carritoAside">
      <div className="aside-header">
        <button className="cerrar-aside" onClick={cerrarAside}>
          <IoMdClose />
        </button>
      </div>

      <Carrito
        productos={productos}
        vaciarCarrito={vaciarCarrito}
        eliminarDelCarrito={eliminarDelCarrito}
      />
    </aside>
  )
}

export default CarritoAside;
