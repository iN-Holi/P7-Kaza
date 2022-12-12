import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <div className="error">
      <h1 className="error-content">404</h1>
      <h2 className="error-text">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <NavLink className="error-navlink" to="/">
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  )
}

export default Error
