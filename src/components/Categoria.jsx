import { useEffect, useState } from "react";
import TarjetaProducto from "../components/TarjetaProducto";
import Boton from "../components/Boton";

const Categoria = ({ nombreCategoria, categoriaAPI, carrito = [], agregarAlCarrito }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoriaAPI}`)
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setCargando(false);
      })
      .catch(() => {
        setError("Error al cargar productos");
        setCargando(false);
      });
  }, [categoriaAPI]);
  
  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2 className="title-section">{nombreCategoria}</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            <TarjetaProducto
              id={producto.id}
              img={producto.image}
              nombre={producto.title}
              precio={producto.price}
              boton={carrito.find(p => p.id === producto.id) ? "✅ Agregado" : "Agregar 🛒"}
              onClick={() => agregarAlCarrito(producto)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categoria;