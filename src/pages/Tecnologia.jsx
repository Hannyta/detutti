import Categoria from '../components/Categoria';

const Tecnologia = ({ carrito, agregarAlCarrito}) => {
  return (
    <>
      <Categoria 
        nombreCategoria="Tecnología" 
        categoriaAPI="electronics" 
        carrito={carrito} 
        agregarAlCarrito={agregarAlCarrito} 
      />
    </>
  )
}

export default Tecnologia;