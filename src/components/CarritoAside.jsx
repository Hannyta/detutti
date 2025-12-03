import { IoMdClose } from 'react-icons/io';
import { useEffect } from 'react';
import Carrito from './Carrito';
import styled, { css } from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 9998;
  ${({ $isOpen }) => !$isOpen && css`display: none;`}
`;

const AsideCarrito = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 380px;
  max-width: 90%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(6px);
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
  padding: 1rem;
  transition: transform 0.35s ease, opacity 0.3s ease;
  z-index: 9999;
  display: flex;
  flex-direction: column;

  transform: translateX(100%);
  opacity: 0;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: translateX(0);
      opacity: 1;
      transition: transform 0.35s cubic-bezier(0.25, 1.25, 0.5, 1),
        opacity 0.3s ease;
    `}

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

const AsideHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.8rem;
  border-bottom: 2px solid #e4e4e4;
`;

const AsideTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.15rem;
  }
`;

const CerrarAside = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  color: #1f4da8;
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    transform: scale(1.15);
    color: #d90429;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.4rem;
  }
`;

const AsideContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-top: 1rem;
`;

const CarritoAside = ({ cerrarAside, isOpen }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        cerrarAside();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, cerrarAside]);

  return (
    <>
      <Backdrop $isOpen={isOpen} onClick={cerrarAside} />
      <AsideCarrito $isOpen={isOpen} role="dialog" aria-modal="true" aria-labelledby="carritoAsideTitle">
        <AsideHeader>
          <AsideTitle id="carritoAsideTitle">Carrito</AsideTitle>
          <CerrarAside onClick={cerrarAside} aria-label="Cerrar carrito">
            <IoMdClose />
          </CerrarAside>
        </AsideHeader>

        <AsideContent>
          <Carrito onClose={cerrarAside} />
        </AsideContent>
      </AsideCarrito>
    </>
  );
};

export default CarritoAside;