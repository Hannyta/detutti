import styled from "styled-components";
import { useSearch } from "../context/SearchContext";
import { MdSearch } from "react-icons/md";

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 0.45rem 1rem 0.45rem 2.5rem;
  border-radius: 8px;
  border: 1px solid #d0d7ff;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.2s ease;
  width: 180px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 4px #1e8fff55;
  }

  @media (max-width: 700px) {
    width: 100%;
    margin-top: 0.5rem;
  }
`;

const Icono = styled(MdSearch)`
  position: absolute;
  left: 8px;
  font-size: 1.3rem;
  color: #7a7a7a;
`;

const BarraBusqueda = () => {
  const { busqueda, setBusqueda } = useSearch();

  return (
    <SearchWrapper>
      <Icono />
      <Input
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </SearchWrapper>
  );
};

export default BarraBusqueda;