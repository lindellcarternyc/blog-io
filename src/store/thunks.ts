import { Dispatch } from 'redux'

import { 
  LoginAction,
  loginFailure,
  loginRequest,
  loginSuccess,
  SignupAction,
  signupFailure,
  signupRequest,
  signupSuccess
} from './actions'

import * as api from '../api'

export const loginThunk = (data: { username: string, password: string }) => async (dispatch: Dispatch<LoginAction>) => {
  dispatch(loginRequest())

  try {
    const user = await api.login(data)
    dispatch(loginSuccess({
      username: data.username,
      id: user.id
    }))
  } catch (err) {
    dispatch(loginFailure(err.message))
  }
}

export const signupThunk = (data: { username: string, password: string }) => async (dispatch: Dispatch<SignupAction>) => {
  dispatch(signupRequest())

  try {
    const user = await api.signup(data)
    dispatch(signupSuccess(user))
  } catch (err) {
    dispatch(signupFailure(err.message))
  }
}