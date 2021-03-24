import { Dispatch } from 'redux'

import * as login from './actions'

import * as api from '../api'

export const loginThunk = (data: { username: string, password: string }) => async (dispatch: Dispatch<login.LoginAction>) => {
  dispatch(login.loginRequest())

  try {
    const user = await api.login(data)
    dispatch(login.loginSuccess({
      username: data.username,
      id: user.id
    }))
  } catch (err) {
    dispatch(login.loginFailure(err.message))
  }
}