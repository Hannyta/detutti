import styled from "styled-components";

export const AccesoriosSection = styled.section`
  margin: 2rem auto;
  max-width: 1200px;
  padding: 1rem;
`;

export const AccesoriosTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary || "#005BAC"};
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;