import styled from "styled-components";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const PaginadorWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const BotonPagina = styled.button`
  padding: 0.2rem 0.4rem;
  border-radius: 8px;
  border: 1px solid #d0d7ff;
  background: ${({ $active }) => ($active ? "#1e8fff" : "white")};
  color: ${({ $active }) => ($active ? "white" : "#003166")};
  cursor: pointer;
  font-weight: 400;
  transition: 0.2s;

  &:hover {
    background: #1e8fff;
    color: white;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const Paginador = ({ paginaActual, totalPaginas, cambiarPagina }) => {
  const paginas = Array.from({ length: totalPaginas }, (_, i) => i + 1);

  return (
    <PaginadorWrapper>
      <BotonPagina
        onClick={() => cambiarPagina(paginaActual - 1)}
        disabled={paginaActual === 1}
      >
        <FaAngleLeft />
      </BotonPagina>

      {paginas.map((num) => (
        <BotonPagina
          key={num}
          $active={num === paginaActual}
          onClick={() => cambiarPagina(num)}
        >
          {num}
        </BotonPagina>
      ))}

      <BotonPagina
        onClick={() => cambiarPagina(paginaActual + 1)}
        disabled={paginaActual === totalPaginas}
      >
        <FaAngleRight />
      </BotonPagina>
    </PaginadorWrapper>
  );
};

export default Paginador;