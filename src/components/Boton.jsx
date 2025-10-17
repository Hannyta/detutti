import styles from './Boton.module.css';

const Boton = ({ texto, onClick, tipo = 'primary', disabled = false }) => {
  const tipoClases = tipo
    .split(' ')
    .map(t => styles[t])
    .join(' ');

  return (
    <button
      className={`${styles.btn} ${tipoClases}`}
      onClick={onClick}
      disabled={disabled}
    >
      {texto}
    </button>
  );
};

export default Boton;