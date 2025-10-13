import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/moda">Moda</Link></li>
        <li><Link to="/tecnologia">Tecnología</Link></li>
        <li><Link to="/accesorios">Accesorios</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar