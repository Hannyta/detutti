import Boton from "./Boton"

const TarjetaProducto = ({ img, nombre, precio, boton, onClick}) => {

  return (
    <div className="tarjeta">
      <img src={img} alt={nombre} />
      <h3>{nombre}</h3>
      <p>Precio: ${precio} </p>
      <Boton texto={boton} onClick={onClick}
      />
    </div>
  )
}

export default TarjetaProducto
