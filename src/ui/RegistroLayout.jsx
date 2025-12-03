import styled from "styled-components";

export const RegistroContainer = styled.div`
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

export const RegistroTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: #005BAC;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const RegistroForm = styled.form`
  display: flex;
  flex-direction: column;

  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 0.6rem;
    margin-bottom: 0.6rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #28a745;
      outline: none;
    }

    @media (max-width: 600px) {
      padding: 0.5rem;
      font-size: 0.9rem;
    }
  }

  button {
    width: 100%;
    margin-top: 0.6rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    }
  }
`;

export const ErrorMsg = styled.p`
  color: #d9534f;
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
`;

export const SuccessMsg = styled.p`
  color: #28a745;
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 0.6rem;
`;