import styled from "styled-components";

export const ModaSection = styled.section`
  margin: 2rem auto;
  max-width: 1200px;
  padding: 1rem;
`;

export const ModaTitle = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  text-align: center;
`;