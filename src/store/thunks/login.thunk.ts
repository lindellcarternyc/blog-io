import { Dispatch } from 'react'
import * as api from '../../api'
import { LoginAction, loginRequest, loginSuccess, loginFailure } from '../actions/login.actions'

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