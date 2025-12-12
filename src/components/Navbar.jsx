import { useAuthContext } from '../context/AuthContext';
import { Nav, NavList, NavItem, Badge } from '../ui/NavbarLayout';

const Navbar = () => {
  const { user } = useAuthContext();
  const esAdmin = user?.rol === "admin";

  return (
    <Nav>
      <NavList>
        <li><NavItem to="/productos">Productos</NavItem></li>
        <li><NavItem to="/moda">Moda</NavItem></li>
        <li><NavItem to="/tecnologia">Tecnología</NavItem></li>
        <li><NavItem to="/accesorios">Accesorios</NavItem></li>

        <li><NavItem to="/ofertas">Ofertas<Badge>%</Badge></NavItem></li>

        {/* Solo visible si el usuario es admin */}
        {esAdmin && (
          <li><NavItem to="/admin">Panel Admin</NavItem></li>
        )}
      </NavList>
    </Nav>
  );
};

export default Navbar;