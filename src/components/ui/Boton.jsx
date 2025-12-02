import styled, { css } from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  color: #fdfdfd;
  font-size: 1em;
  transition: border-color 0.25s;
  font-family: ${({ theme }) => theme.fonts.heading};

  &:hover {
    opacity: 0.85;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  /* Variantes */
  ${({ tipo, theme }) =>
    tipo === "primary" &&
    css`
      background-color: #32a3e4;
    `}

  ${({ tipo }) =>
    tipo === "danger" &&
    css`
      background-color: #dd394f;
    `}

  ${({ tipo }) =>
    tipo === "danger-2" &&
    css`
      background-color: #f72672;
    `}

  ${({ tipo, theme }) =>
    tipo === "secondary" &&
    css`
      background-color: ${theme.colors.primary};
    `}

  /* Tamaño pequeño */
  ${({ tipo }) =>
    tipo === "small" &&
    css`
      padding: 8px 6px;
      font-size: 1.8rem;
      border-radius: 6px;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  /* Responsive */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

const Boton = ({ texto, onClick, tipo = "primary", disabled = false }) => {
  return (
    <StyledButton tipo={tipo} onClick={onClick} disabled={disabled}>
      {texto}
    </StyledButton>
  );
};

export default Boton;