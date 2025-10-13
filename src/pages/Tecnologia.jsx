import Categoria from '../components/Categoria';

const Tecnologia = ({ carrito, agregarAlCarrito}) => {
  return (
    <section>
      <Categoria 
        nombreCategoria="Tecnología" 
        categoriaAPI="electronics" 
        carrito={carrito} 
        agregarAlCarrito={agregarAlCarrito} 
      />
    </section>
  )
}

export default Tecnologia;