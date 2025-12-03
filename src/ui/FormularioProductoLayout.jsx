import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;

  @media (max-width: 600px) {
    align-items: flex-start;
  }

  @media (min-width: 601px) {
    align-items: center;
  }
`;

export const ModalContainer = styled.div`
  max-width: 500px;
  width: 100%;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.15);
  text-align: left;
  animation: ${fadeIn} 0.35s cubic-bezier(0.25, 1.25, 0.5, 1);
  position: relative;
  z-index: 1000;

  @media (max-width: 600px) {
    margin-top: 70px;
    max-height: calc(100vh - 70px);
    overflow-y: auto;
  }
`;

export const ModalContent = styled.div`
  padding-top: 0.5rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const ModalHeaderTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  color: #333;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  color: #666;
  transition: color 0.3s ease;

  &:hover {
    color: #000;
  }
`;

export const TituloAzul = styled.span`
  color: #005BAC;
  font-weight: bold;
  margin-bottom: 0.4rem;
`;

export const FormLabel = styled.label`
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: #444;
  text-align: left;
  display: block;
`;

export const FormInputBase = styled.input`
  width: 100%;
  padding: 0.6rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
  font-size: 1rem;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.6rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
  font-size: 1rem;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const BtnBase = styled.button`
  flex: 1;
  padding: 0.6rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
`;

export const BtnPrimary = styled(BtnBase)`
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }
`;

export const BtnSecondary = styled(BtnBase)`
  background-color: #f1f1f1;
  color: #333;

  &:hover {
    background-color: #ddd;
  }
`;