import Categoria from '../components/Categoria';
import { Helmet } from 'react-helmet-async';
import { TecnologiaSection, TecnologiaTitle } from '../ui/TecnologiaLayout';

const Tecnologia = () => {
  const subCategorias = [
    { nombre: "Televisores", api: "Tv" },
    { nombre: "Audio", api: "Audio" },
    { nombre: "Notebook", api: "Notebook" },
    { nombre: "Smartphone", api: "Smartphone" },
  ];

  return (
    <TecnologiaSection aria-label="Categorías de tecnología">
      <Helmet>
        <title>Detutti - Tecnología</title>
        <meta name="description" content="Explora nuestra selección de tecnología: televisores, audio, notebooks y smartphones." />
      </Helmet>

      <TecnologiaTitle>Tecnología</TecnologiaTitle>
      {subCategorias.map((sub) => (
        <div key={sub.api}>
          <Categoria
            nombreCategoria={sub.nombre}
            categoriaAPI="Tecnologia"
            subCategoriaAPI={sub.api}
          />
        </div>
      ))}
    </TecnologiaSection>
  );
};

export default Tecnologia;