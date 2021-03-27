import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CreateUserModel, LoginUserModel, UserModel } from '../../../models/User.model'
import { AsyncState } from '../../state'

import * as api from '../../../api'

export type UserState = AsyncState<{ user: UserModel | null }>
export const DefaultUserState: UserState = {
  user: null,
  isLoading: false,
  error: null
}

export const login = createAsyncThunk('user/login', async (data: LoginUserModel) => {
  try {
    const user = await api.login(data)
    return user
  } catch (err) {
    throw err.message
  }
})

export const signup = createAsyncThunk('user/signup', async (data: CreateUserModel) => {
  try {
    const user = await api.signup(data)
    return user
  } catch (err) {
    throw err.message
  }
})

export const logout = createAsyncThunk('user/logout', async () => {
  try {
    await api.logout()
  } catch (err) {
    throw err.message
  }
})

const userSlice = createSlice({
  name: 'user',
  initialState: DefaultUserState,
  reducers: {

  },
  extraReducers: builder => {
    builder.addCase(login.pending, (state) => {
      state.error = null
      state.user = null
      state.isLoading = true
    })
    .addCase(login.fulfilled, (state, action) => {
      state.error = null
      state.isLoading = false
      state.user = action.payload
    })
    .addCase(login.rejected, (state, action) => {
      state.error = action.payload as string
      state.user = null
      state.isLoading = false
    })
    .addCase(signup.pending, (state) => {
      state.error = null
      state.isLoading = true
      state.user = null
    })
    .addCase(signup.fulfilled, (state, action) => {
      state.error = null
      state.isLoading = false
      state.user = action.payload
    })
    .addCase(signup.rejected, (state, action) => {
      state.error = action.payload as string
      state.user = null
      state.isLoading = false
    })
    .addCase(logout.pending, (state) => {
      state.error = null
      state.isLoading = true
    })
    .addCase(logout.fulfilled, (state) => {
      state.error = null
      state.isLoading = false
      state.user = null
    })
    .addCase(logout.rejected, (state, action) => {
      state.error = action.payload as string
      state.user = null
      state.isLoading = false
    })
  }
})

export default userSlice.reducer