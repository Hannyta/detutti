import { useProductosContext } from '../context/ProductosContext';
import Productos from '../components/Productos';

const Inicio = () => {
  const { productos, cargando, error } = useProductosContext();

  return (
    <>
      <h2>Productos</h2>
      <Productos
        productos={productos}
        cargando={cargando}
        error={error}
      />
    </>
  );
};

export default Inicio;