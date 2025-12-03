import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ $tipo, theme }) =>
    $tipo === "primary" ? theme.colors.primary : theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ $tipo, theme }) =>
      $tipo === "primary" ? theme.colors.primaryHover : theme.colors.secondaryHover};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Boton = ({ texto, onClick, ariaLabel, tipo = "primary", disabled = false }) => {
  return (
    <StyledButton
      $tipo={tipo}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      type="button"
    >
      {texto}
    </StyledButton>
  );
};

export default Boton;