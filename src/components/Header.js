import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} alt="Logo du site Kasa" className="header-logo" />
      </NavLink>
      <nav className="header-nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/About">A Propos</NavLink>
      </nav>
    </header>
  )
}

export default Header
