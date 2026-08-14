import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getProfile, updateProfile } from '../../services/api'

export const fetchUserProfile = createAsyncThunk(
  'user/fetchProfile',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth
      return await getProfile(token)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

const initialState = {
  firstName: null,
  lastName: null,
  userName: null,
  status: 'idle',
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
        state.userName = action.payload.userName
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  },
})

export const updateUserName = createAsyncThunk(
  'user/updateUserName',
  async (userName, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth
      return await updateProfile(token, userName)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

export const { clearUser } = userSlice.actions
export default userSlice.reducer