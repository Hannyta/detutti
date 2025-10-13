import Categoria from "../components/Categoria";

const Accesorios = ({ carrito, agregarAlCarrito}) => {
  return (
    <section>
      <Categoria
        nombreCategoria="Accecorios"
        categoriaAPI="jewelery"
        carrito={carrito}
        agregarAlCarrito={agregarAlCarrito}
      />
    </section>
  )
}

export default Accesorios;
