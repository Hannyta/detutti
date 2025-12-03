import Navbar from './Navbar';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUserLarge } from 'react-icons/fa6';
import { MdLogout } from 'react-icons/md';
import { useAuthContext } from '../context/AuthContext';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
`;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundHeader || "#FFF9F0"};
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  padding: 0.8rem 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  height: 90px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    height: auto;
    padding: 0.5rem 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoPrincipal = styled.img`
  height: 70px;
  width: auto;
  margin-left: 16px;
  max-width: 160px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 60px;
    margin-left: 0;
    max-width: 140px;
  }
`;

const HeaderIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const HeaderCarrito = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0;
  cursor: pointer;
`;

const IconoUser = styled(FaUserLarge)`
  font-size: 1.7rem;
  color: #3ca8f0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #005BAC;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.4rem;
  }
`;

const IconoCarrito = styled(FaShoppingCart)`
  font-size: 1.7rem;
  color: #3ca8f0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #005BAC;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.4rem;
  }
`;

const LogoutIcon = styled.button`
  background: transparent;
  border: none;
  font-size: 1rem;
  color: #3ca8f0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #005BAC;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.4rem;
  }
`;

const ContadorCarrito = styled.span`
  position: absolute;
  top: -6px;
  right: -6px;
  background: #f9ce31;
  color: #003166;
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: bold;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 3px rgba(0,0,0,0.3);
  animation: ${bounce} 0.35s cubic-bezier(0.25, 1.25, 0.5, 1);
`;

const Header = ({ contadorCarrito, onCarritoClick }) => {
  const { user, logout } = useAuthContext();
  const esAdmin = user?.rol === 'admin';

  return (
    <StyledHeader aria-labelledby="siteLogo">
      <HeaderContainer>
        {/* Logo */}
        <LogoContainer>
          <Link to="/" id="siteLogo">
            <LogoPrincipal src={logo} alt="Logo Detutti" />
          </Link>
        </LogoContainer>

        {/* Navbar */}
        <Navbar user={user} />

        {/* Iconos */}
        <HeaderIcon>
          {user ? (
            <>
              {esAdmin ? (
                <Link to="/admin">Hola, {user.nombre}</Link>
              ) : (
                <span>Hola, {user.nombre}</span>
              )}
              <LogoutIcon onClick={logout} aria-label="Cerrar sesión">
                <MdLogout />
              </LogoutIcon>
            </>
          ) : (
            <Link to="/login" title="Iniciar sesión" aria-label="Login">
              <IconoUser />
            </Link>
          )}

          {/* Carrito */}
          <HeaderCarrito onClick={onCarritoClick} role="button" aria-label="Ver carrito">
            <IconoCarrito title="Ver carrito" />
            {contadorCarrito > 0 && (
              <ContadorCarrito>{contadorCarrito}</ContadorCarrito>
            )}
          </HeaderCarrito>
        </HeaderIcon>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header