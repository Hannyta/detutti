import styled from "styled-components";

export const ForgotContainer = styled.section`
  width: 100%;
  max-width: 580px;
  margin: 4rem auto;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 14px;
  border-top: 6px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 1.5rem;
    margin: 2rem 1rem;
  }
`;

export const ForgotTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.heading};
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

export const ForgotForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  input[type="email"] {
    width: 100%;
    padding: 0.5rem 0.5rem;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.bgInput};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 1rem;
    transition: all 0.2s ease;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primarySoft};
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.textPlaceholder};
    }
  }

  button {
    margin-top: 1rem;
  }
`;

export const ForgotButton = styled.button`
  width: 100%;
  padding: 0.85rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  }
`;

export const PrimaryButton = styled(ForgotButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Mensaje = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.success};
  font-weight: 600;
  background: ${({ theme }) => theme.colors.successSoft};
  padding: 0.8rem;
  border-radius: 10px;
  border-left: 4px solid ${({ theme }) => theme.colors.success};
`;

export const ErrorMensaje = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.error};
  font-weight: 600;
  background: ${({ theme }) => theme.colors.errorSoft};
  padding: 0.8rem;
  border-radius: 10px;
  border-left: 4px solid ${({ theme }) => theme.colors.error};
`;