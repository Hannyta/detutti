import Navbar from "./Navbar"
import logo from "../assets/Logo.png"

const Header = () => {
  return (
    <header>
        <div className="header-container">
          <div className="logo-container">
              <a>
                <img className="logo-principal" src={logo} alt="Logo Detutti" />
              </a>
          </div>

          <Navbar/>
        </div>
    </header>
  )
}

export default Header
