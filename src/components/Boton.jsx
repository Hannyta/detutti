const Boton = ({ texto, onClick, tipo = 'primary', disabled = false }) => {
  return (
    <button
      className={`btn ${tipo}`}
      onClick={onClick}
      disabled={disabled}
    >
      {texto}
    </button>
  );
};

export default Boton