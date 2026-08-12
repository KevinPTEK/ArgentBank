import { logout } from './authSlice'
import { clearUser } from '../user/userSlice'
import { clearToken } from './tokenStorage'

export const logoutUser = () => (dispatch) => {
  clearToken()
  dispatch(logout())
  dispatch(clearUser())
}