import Categoria from '../components/Categoria';

const Accesorios = () => {
  return (
    <>
      <h2>Accesorios</h2>
      <div>
        <Categoria
        nombreCategoria="Joyeria"
        categoriaAPI="Accesorios"
        subCategoriaAPI="Joyeria"
      />
      </div>
      <div>
        <Categoria
        nombreCategoria="Deportivos"
        categoriaAPI="Accesorios"
        subCategoriaAPI="Deporte"
      />
      </div>
      <div>
        <Categoria
        nombreCategoria="Gorras"
        categoriaAPI="Accesorios"
        subCategoriaAPI="Gorras"
      />
      </div>
      <div>
        <Categoria
        nombreCategoria="Mochilas"
        categoriaAPI="Accesorios"
        subCategoriaAPI="Mochilas"
      />
      </div>
      
    </>
  );
};

export default Accesorios;