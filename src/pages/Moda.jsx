import Categoria from '../components/Categoria';

const Moda = ({ carrito, agregarAlCarrito}) => {
  return (
    <>
      <h2>Moda</h2>
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
    </>
  )
}

export default Moda;