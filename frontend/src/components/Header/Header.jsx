import { NavLink } from 'react-router-dom'
import './Header.sass'
// import Logo from '../../assets/nav-logo.svg'

function Header() {
  return (
    <div className="nav">
      <NavLink to="/">
        Lucas Magalhaes
      </NavLink>
      <div className="nav__links">
        <NavLink className="nav__link" to="/">
          Home
        </NavLink>
        <NavLink to="/" onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}>
            Work
        </NavLink>
        <NavLink className="nav__link" to="/signIn">
          Sign In
        </NavLink>
      </div>
    </div>
  )
}

export default Header