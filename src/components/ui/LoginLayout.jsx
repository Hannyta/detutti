import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;

  @media (max-width: 600px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const LoginContainer = styled.div`
  max-width: 400px;
  margin: 100px auto;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  text-align: center;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 1.5rem;
    color: #333;

    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }

  button {
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

    &.primary {
      background-color: #007bff;
      color: #fff;

      &:hover {
        background-color: #0056b3;
      }
    }

    &.secondary {
      background-color: #f1f1f1;
      color: #333;

      &:hover {
        background-color: #ddd;
      }
    }
  }

  @media (max-width: 600px) {
    margin: 40px auto;
    padding: 1.5rem;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 0.6rem;
    margin-bottom: 0.4rem;
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

export const Recordarme = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.4rem;
  width: 100%;
  margin: 0.6rem 0;

  label {
    font-size: 0.9rem;
    color: #333;
  }
`;

export const ForgotPassword = styled.div`
  margin-top: 0.5rem;
`;

export const Register = styled.div`
  margin-top: 1rem;

  label {
    display: block;
    margin-bottom: 0.4rem;
    font-size: 0.9rem;
    color: #555;
  }
`;

export const ErrorMsg = styled.p`
  color: #e74883;
  font-weight: 500;
  margin-top: 0.5rem;
`;