import Categoria from "../components/Categoria";

const Moda = ({ carrito, agregarAlCarrito}) => {
  return (
    <section>
        <h1>Moda</h1>
        <div>
          <Categoria
            nombreCategoria="Moda de Caballero"
            categoriaAPI="men's clothing" 
            carrito={carrito} 
            agregarAlCarrito={agregarAlCarrito}
          />
        </div>
        <div>
          <Categoria
            nombreCategoria="Moda de Dama"
            categoriaAPI="women's clothing" 
            carrito={carrito} 
            agregarAlCarrito={agregarAlCarrito}
          />
        </div>
    </section>
  )
}

export default Moda;