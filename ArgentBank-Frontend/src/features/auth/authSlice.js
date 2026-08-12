import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { login } from '../../services/api'
import { saveToken, readToken } from './tokenStorage'

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password, remember }, { rejectWithValue }) => {
    try {
      const token = await login({ email, password })
      saveToken(token, remember)
      return token
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

const initialState = {
  token: readToken(),
  status: 'idle',
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => ({ ...initialState, token: null }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.token = action.payload
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer