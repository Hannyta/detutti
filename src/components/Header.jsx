import Navbar from "./Navbar"

const Header = () => {
  return (
    <header>
        <div className="header-container">
          <div className="logo-container">
              <a className logo-principal href="/">🛒</a>
              <h1>Detutti Store</h1>
          </div>

          <Navbar/>
        </div>
    </header>
  )
}

export default Header
