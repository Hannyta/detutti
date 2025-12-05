import styled from "styled-components";

export const LoginWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.large};
  background: ${({ theme }) => theme.colors.background};
`;

export const LoginBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
  width: 100%;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const LoginSide = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.large};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  background: ${({ theme }) => theme.colors.background};

  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.text};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.small};

    input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 0.95rem;

      &:focus {
        border-color: ${({ theme }) => theme.colors.focus};
        outline: none;
      }
    }
  }
`;

export const LoginDivider = styled.div`
  width: 1px;
  background: #eee;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    height: 1px;
  }
`;

export const Recordarme = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const BotonesRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
  margin-top: ${({ theme }) => theme.spacing.small};

  /* Para que los botones ocupen el mismo ancho */
  button {
    flex: 1;
  }
`;