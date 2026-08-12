import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { logoutUser } from '../../features/auth/authActions'
import logo from '../../assets/img/argentBankLogo.webp'
import UserCircleIcon from '../Icons/UserCircleIcon'
import SignOutIcon from '../Icons/SignOutIcon'
import './Nav.css'

function Nav() {
  const userName = useSelector((state) => state.user.userName)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleLogout() {
    navigate('/')
    dispatch(logoutUser())
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {userName ? (
          <>
            <Link className="main-nav-item" to="/profile">
              <UserCircleIcon className="main-nav-icon" />
              {userName}
            </Link>
            <button type="button" className="main-nav-item" onClick={handleLogout}>
              <SignOutIcon className="main-nav-icon" />
              Sign Out
            </button>
          </>
        ) : (
          <Link className="main-nav-item" to="/login">
            <UserCircleIcon className="main-nav-icon" />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Nav