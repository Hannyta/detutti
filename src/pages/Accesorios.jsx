import Categoria from '../components/Categoria';

const Accesorios = ({ carrito, agregarAlCarrito}) => {
  return (
    <>
      <Categoria
        nombreCategoria="Accecorios"
        categoriaAPI="jewelery"
        carrito={carrito}
        agregarAlCarrito={agregarAlCarrito}
      />
    </>
  )
}

export default Accesorios;
