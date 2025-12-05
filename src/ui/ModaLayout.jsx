import styled from "styled-components";

export const ModaSection = styled.section`
  margin: 2rem auto;
  max-width: 1200px;
  padding: 1rem;
`;

export const ModaTitle = styled.h2`
  font-size: clamp(1.8rem, 2.5vw, 2.2rem);
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.heading};
  letter-spacing: 0.5px;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 0.6rem auto 0;
    border-radius: 2px;
  }
`;