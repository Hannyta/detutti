import Categoria from '../components/Categoria';

const Tecnologia = () => {
  const subCategorias = [
    { nombre: "Televisores", api: "Tv" },
    { nombre: "Audio", api: "Audio" },
    { nombre: "Notebook", api: "Notebook" },
    { nombre: "Smartphone", api: "Smartphone" },
  ];

  return (
    <section aria-label="Categorías de tecnología">
      <h2>Tecnología</h2>
      {subCategorias.map(sub => (
        <div key={sub.api}>
          <Categoria
            nombreCategoria={sub.nombre}
            categoriaAPI="tecnologia"
            subCategoriaAPI={sub.api}
          />
        </div>
      ))}
    </section>
  );
};

export default Tecnologia;