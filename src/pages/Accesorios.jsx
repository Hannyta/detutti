import Categoria from '../components/Categoria';
import { Helmet } from 'react-helmet-async';
import { AccesoriosSection, AccesoriosTitle } from '../ui/AccesoriosLayout';

const Accesorios = () => {
  const subCategorias = [
    { nombre: "Joyeria", api: "Joyeria" },
    { nombre: "Deportivos", api: "Deporte" },
    { nombre: "Gorras", api: "Gorras" },
    { nombre: "Mochilas", api: "Mochilas" },
    { nombre: "Botellas", api: "Botellas" },
  ];

  return (
    <AccesoriosSection aria-label="Categorías de accesorios">
      <Helmet>
        <title>Detutti - Accesorios</title>
        <meta 
          name="description" 
          content="Explora nuestra selección de accesorios: joyería, deportivos, gorras, mochilas y botellas." 
        />
      </Helmet>

      <AccesoriosTitle as="h1">Accesorios</AccesoriosTitle>
      {subCategorias.map((sub) => (
        <div key={sub.api}>
          <Categoria
            nombreCategoria={sub.nombre}
            categoriaAPI="Accesorios"
            subCategoriaAPI={sub.api}
          />
        </div>
      ))}
    </AccesoriosSection>
  );
};

export default Accesorios;