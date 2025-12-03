import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundFooter || "#FFF9F0"};
  color: ${({ theme }) => theme.colors.textFooter || "#333"};
  padding: 0.5rem 0;
  text-align: center;
  border-top: 1px solid #ddd;
  box-shadow: 0 -2px 5px rgba(0,0,0,0.05);
  font-size: 0.9rem;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.8rem;
    line-height: 1.4;
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <p>Copyright © 2019-{year} Detutti C.A.</p>
      <p>Todos los derechos reservados.</p>
    </StyledFooter>
  );
};

export default Footer;