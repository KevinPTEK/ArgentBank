import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { loginUser } from '../../features/auth/authSlice'
import UserCircleIcon from '../Icons/UserCircleIcon'
import './SignInForm.css'

function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { status, error } = useSelector((state) => state.auth)

  async function handleSubmit(event) {
    event.preventDefault()
    const result = await dispatch(loginUser({ email, password, remember }))
    if (loginUser.fulfilled.match(result)) {
      navigate('/profile')
    }
  }

  return (
    <section className="sign-in-content">
      <UserCircleIcon className="sign-in-icon" />
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            checked={remember}
            onChange={(event) => setRemember(event.target.checked)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        {error && (
          <p className="sign-in-error" role="alert">
            {error}
          </p>
        )}

        <button className="sign-in-button" disabled={status === 'loading'}>
          {status === 'loading' ? 'Connexion…' : 'Sign In'}
        </button>
      </form>
    </section>
  )
}

export default SignInForm