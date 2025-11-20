import Categoria from '../components/Categoria';

const Moda = () => {
  return (
    <>
      <h2>Moda</h2>
      <div>
        <Categoria
          nombreCategoria="Moda de Caballero"
          categoriaAPI="men's clothing" 
        />
      </div>
      <div>
        <Categoria
          nombreCategoria="Moda de Dama"
          categoriaAPI="women's clothing" 
        />
      </div>
    </>
  );
};

export default Moda;