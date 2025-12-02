import styled from "styled-components";

export const ProductosContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  padding: 0;
  list-style: none;

  @media (min-width: 1500px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;