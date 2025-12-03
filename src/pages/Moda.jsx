import Categoria from '../components/Categoria';
import { Helmet } from 'react-helmet';
import { ModaSection, ModaTitle } from '../ui/ModaLayout';

const Moda = () => {
  const subCategorias = [
    { nombre: "Moda de Caballero", api: "Hombre" },
    { nombre: "Moda de Dama", api: "Mujer" },
    { nombre: "Moda Infantil", api: "Infantil" },
  ];

  return (
    <ModaSection aria-label="Categorías de moda">
      <Helmet>
        <title>Detutti - Moda</title>
        <meta name="description" content="Explora nuestra selección de moda: caballero, dama e infantil." />
      </Helmet>

      <ModaTitle>Moda</ModaTitle>
      {subCategorias.map((sub) => (
        <div key={sub.api}>
          <Categoria
            nombreCategoria={sub.nombre}
            categoriaAPI="Moda"
            subCategoriaAPI={sub.api}
          />
        </div>
      ))}
    </ModaSection>
  );
};

export default Moda;