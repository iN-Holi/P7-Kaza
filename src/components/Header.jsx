import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.svg"


function Header() {
    return (
      <header className='header'>
        <NavLink to="/"><img className='header-logo' src={logo} alt="logo de Kasa"/></NavLink>
        <nav className='header-nav'>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/About">A Propos</NavLink>
        </nav>
      </header>
    )
  };
  
  export default Header;