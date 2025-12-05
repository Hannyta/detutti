import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ $tipo, theme }) =>
    $tipo === "primary" ? theme.colors.primary : theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 18px;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  min-height: 34px;
  min-windth: 100px;
  line-height: 1.2;
  text-align: center;
  width: auto;
  white-space: nowrap;
  margin: 0 auto;

  &:hover {
    background-color: ${({ $tipo, theme }) =>
      $tipo === "primary" ? theme.colors.primaryHover : theme.colors.secondaryHover};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  /* 🔹 Ajuste para mobile */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;   // ocupa todo el ancho en pantallas pequeñas
    margin: 0;     // elimina el centrado automático
  }
`;


const Boton = ({ children, onClick, ariaLabel, tipo = "primary", disabled = false }) => {
  return (
    <StyledButton
      $tipo={tipo}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      type="button"
    >
      {children}
    </StyledButton>
  );
};

export default Boton;