import { Dispatch } from 'redux'
import { SignupAction, signupRequest, signupSuccess, signupFailure } from '../actions/signup.actions'

import * as api from '../../api'

export const signupThunk = (data: { username: string, password: string }) => async (dispatch: Dispatch<SignupAction>) => {
  dispatch(signupRequest())

  try {
    const user = await api.signup(data)
    dispatch(signupSuccess(user))
  } catch (err) {
    dispatch(signupFailure(err.message))
  }
}