import Categoria from '../components/Categoria';

const Accesorios = () => {
  const subCategorias = [
    { nombre: "Joyeria", api: "Joyeria" },
    { nombre: "Deportivos", api: "Deporte" },
    { nombre: "Gorras", api: "Gorras" },
    { nombre: "Mochilas", api: "Mochilas" },
    { nombre: "Botellas", api: "Botellas" },
  ];

  return (
    <section aria-label="Categorías de accesorios">
      <h2>Accesorios</h2>
      {subCategorias.map(sub => (
        <div key={sub.api}>
          <Categoria
            nombreCategoria={sub.nombre}
            categoriaAPI="Accesorios"
            subCategoriaAPI={sub.api}
          />
        </div>
      ))}
    </section>
  );
};

export default Accesorios;