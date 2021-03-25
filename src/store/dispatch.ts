import { ThunkDispatch } from 'redux-thunk'
import { useDispatch } from 'react-redux'

import { AppState } from './state'

import { LoginAction, SignupAction } from './actions'

export type AppDispatch = ThunkDispatch<AppState, any, LoginAction | SignupAction>

export const useAppDispatch = (): AppDispatch => {
  return useDispatch()
}