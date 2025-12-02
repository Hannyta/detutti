import Categoria from '../components/Categoria';

const Moda = () => {
  const subCategorias = [
    { nombre: "Moda de Caballero", api: "Hombre" },
    { nombre: "Moda de Dama", api: "Mujer" },
    { nombre: "Moda Infantil", api: "Infantil" },
  ];

  return (
    <section aria-label="Categorías de moda">
      <h2>Moda</h2>
      {subCategorias.map(sub => (
        <div key={sub.api}>
          <Categoria
            nombreCategoria={sub.nombre}
            categoriaAPI="Moda"
            subCategoriaAPI={sub.api}
          />
        </div>
      ))}
    </section>
  );
};

export default Moda;