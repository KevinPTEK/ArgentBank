import { Link } from 'react-router'
import logo from '../../assets/img/argentBankLogo.webp'
import UserCircleIcon from '../Icons/UserCircleIcon'
import SignOutIcon from '../Icons/SignOutIcon'
import './Nav.css'

function Nav({ userName }) {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <div>
          {userName ? (
            <>
              <Link className="main-nav-item" to="/profile">
                <UserCircleIcon className="main-nav-icon" />
                {userName}
              </Link>
              <Link className="main-nav-item" to="/">
                <SignOutIcon className="main-nav-icon" />
                Sign Out
              </Link>
            </>
          ) : (
            <Link className="main-nav-item" to="/login">
              <UserCircleIcon className="main-nav-icon" />
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav