import Navbar from './Navbar'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

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

          <div className="header-icon" onClick={onCarritoClick}>
              <FaShoppingCart className="icono-carrito"/>
              {contadorCarrito > 0 && (<span className="contador-carrito">{contadorCarrito}</span>)}
          </div>
        </div>
    </header>
  )
}

export default Header