import { useProductosContext } from '../context/ProductosContext';
import Productos from '../components/Productos';

const Inicio = () => {
  const { productos, cargando, error } = useProductosContext();

  if (cargando) {
    return (
      <div className="text-center mt-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger mt-4">
        Ocurrió un error al cargar los productos: {error}
      </div>
    );
  }

  return (
    <main>
      <h2 className="tituloSeccion">Productos</h2>
      {productos.length === 0 ? (
        <p className="text-center text-muted">No hay productos disponibles</p>
      ) : (
        <Productos productos={productos} cargando={cargando} error={error} />
      )}
    </main>
  );
};

export default Inicio;