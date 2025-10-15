import Navbar from './Navbar'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
import { FaUserLarge } from 'react-icons/fa6';

const Header = ({contadorCarrito, onCarritoClick}) => {
  return (
    <header>
        <div className="header-container">
          <div className="logo-container">
              <Link to="/">
                <img className="logo-principal" src={logo} alt="Logo Detutti" />
              </Link>
          </div>

          <Navbar/>

          <div className="header-icon">
            <Link to="/login" className="login-link" title="Iniciar sesión">
            <FaUserLarge
            className="icono-user"/>
            </Link>
            <div className="header-carrito" onClick={onCarritoClick}>
              <FaShoppingCart className="icono-carrito" title="Ver carrito"/>
              {contadorCarrito > 0 && (<span className="contador-carrito">{contadorCarrito}</span>)}
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header;