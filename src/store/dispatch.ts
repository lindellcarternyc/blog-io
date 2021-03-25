import { ThunkDispatch } from 'redux-thunk'
import { useDispatch } from 'react-redux'

import { AppState } from './state'

import { LoginAction } from './actions/login.actions'
import { SignupAction } from './actions/signup.actions'
import { LogoutAction } from './actions/logout.actions'

export type AppDispatch = ThunkDispatch<AppState, any, LoginAction | SignupAction | LogoutAction>

export const useAppDispatch = (): AppDispatch => {
  return useDispatch()
}