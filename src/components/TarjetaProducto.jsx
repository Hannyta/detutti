import Boton from './Boton';
import { Link } from 'react-router-dom';

const TarjetaProducto = ({ img, nombre, precio, boton, onClick, id}) => {

  return (
    <div className="tarjeta">
      <Link to={`/productos/${id}`} className="tarjeta-link" >
        <img src={img} alt={nombre} />
        <h3>{nombre}</h3>
      </Link>
      <h4>Precio: ${precio}</h4>
      <Boton texto={boton} onClick={onClick}
      />
    </div>
  )
}

export default TarjetaProducto