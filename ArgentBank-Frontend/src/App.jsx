import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router'
import { fetchUserProfile } from './features/user/userSlice'
import { logoutUser } from './features/auth/authActions'
import Home from './pages/Home/Home'
import SignIn from './pages/SignIn/SignIn'
import User from './pages/User/User'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

function App() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const userStatus = useSelector((state) => state.user.status)

  useEffect(() => {
    if (token && userStatus === 'idle') {
      dispatch(fetchUserProfile())
    }
  }, [token, userStatus, dispatch])

  useEffect(() => {
    if (userStatus === 'failed') {
      dispatch(logoutUser())
    }
  }, [userStatus, dispatch])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App