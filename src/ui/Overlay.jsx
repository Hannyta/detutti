import styled, { css } from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 9998;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;

export default Overlay;