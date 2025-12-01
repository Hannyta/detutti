import Categoria from '../components/Categoria';

const Moda = () => {
  return (
    <>
      <h2>Moda</h2>
      <div>
        <Categoria
          nombreCategoria="Moda de Caballero"
          categoriaAPI="Moda"
          subCategoriaAPI="Hombre"
        />
      </div>
      <div>
        <Categoria
          nombreCategoria="Moda de Dama"
          categoriaAPI="Moda"
          subCategoriaAPI="Mujer"
        />
      </div>
      <div>
        <Categoria
          nombreCategoria="Moda Infantil"
          categoriaAPI="Moda"
          subCategoriaAPI="Infantil"
        />
      </div>
    </>
  );
};

export default Moda;