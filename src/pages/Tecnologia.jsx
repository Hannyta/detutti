import Categoria from '../components/Categoria';

const Tecnologia = () => {
  return (
    <>
      <h2>Tecnología</h2>
      <div>
        <Categoria
          nombreCategoria="Televisores"
          categoriaAPI="tecnologia"
          subCategoriaAPI="Tv"
        />
      </div>
      <div>
        <Categoria
          nombreCategoria="Audio"
          categoriaAPI="tecnologia"
          subCategoriaAPI="Audio"
        />
      </div>
      <div>
        <Categoria
          nombreCategoria="Notebook"
          categoriaAPI="tecnologia"
          subCategoriaAPI="Notebook"
        />
      </div>
      <div>
        <Categoria
          nombreCategoria="Smartphone"
          categoriaAPI="tecnologia"
          subCategoriaAPI="Smartphone"
        />
      </div>
    </>
  );
};

export default Tecnologia;