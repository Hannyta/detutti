import styled from "styled-components";

export const RegistroContainer = styled.div`
  width: 100%;
  max-width: 580px;
  margin: 4rem auto;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 14px;
  border-top: 6px solid ${({ theme }) => theme.colors.primary}; /* Branding DETUTTI */
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 1.5rem;
    margin: 2rem 1rem;
  }
`;

export const RegistroTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.heading};
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

export const RegistroForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  button {
    margin-top: 1.5rem;
  }

  label {
    font-size: 0.95rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 0.25rem;
  }

  input {
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

    &[aria-invalid="true"] {
      border-color: ${({ theme }) => theme.colors.error};
    }
  }
`;

export const ErrorMsg = styled.p`
  background: ${({ theme }) => theme.colors.errorSoft};
  color: ${({ theme }) => theme.colors.error};
  padding: 0.8rem 1rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  border-left: 4px solid ${({ theme }) => theme.colors.error};
`;

export const SuccessMsg = styled.p`
  background: ${({ theme }) => theme.colors.successSoft};
  color: ${({ theme }) => theme.colors.success};
  padding: 0.8rem 1rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  border-left: 4px solid ${({ theme }) => theme.colors.success};
`;