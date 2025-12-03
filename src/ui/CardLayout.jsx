import styled from "styled-components";

const CardLayout = styled.div`
  position: relative; /* 🔑 Necesario para posicionar la etiqueta */
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 1rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.cardBackground || "#fff"};
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
`;

export default CardLayout;