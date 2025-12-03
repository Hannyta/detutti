import styled from "styled-components";

export const ForgotContainer = styled.section`
  max-width: 400px;
  margin: 100px auto;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  text-align: center;

  @media (max-width: 600px) {
    margin: 40px auto;
    padding: 1.5rem;
  }
`;

export const ForgotTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: #333;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const ForgotForm = styled.form`
  input[type="email"] {
    width: 100%;
    padding: 0.6rem;
    margin-bottom: 0.8rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #007bff;
      outline: none;
    }

    @media (max-width: 600px) {
      padding: 0.5rem;
      font-size: 0.9rem;
    }
  }
`;

export const ForgotButton = styled.button`
  width: 100%;
  margin-top: 0.4rem;
  padding: 0.6rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  }
`;

export const PrimaryButton = styled(ForgotButton)`
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Mensaje = styled.p`
  margin-top: 1rem;
  color: #2e7d32;
  font-weight: 600;
  background: #e8f5e9;
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid #c8e6c9;
`;

export const ErrorMensaje = styled.p`
  margin-top: 1rem;
  color: #e74883;
  font-weight: 600;
`;