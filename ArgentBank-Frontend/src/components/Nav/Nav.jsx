import { Link } from 'react-router'
import logo from '../../assets/img/argentBankLogo.webp'
import './Nav.css'

function Nav({ userName }) {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {userName ? (
          <>
            <Link className="main-nav-item" to="/profile">{userName}</Link>
            <Link className="main-nav-item" to="/">Sign Out</Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/login">Sign In</Link>
        )}
      </div>
    </nav>
  )
}

export default Nav