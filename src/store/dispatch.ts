import { ThunkDispatch } from 'redux-thunk'
import { useDispatch } from 'react-redux'

import { AppState } from './state'
import reducer from './reducer'

export type AppAction = Parameters<typeof reducer>[1]

export type AppDispatch = ThunkDispatch<AppState, any, AppAction>

export const useAppDispatch = (): AppDispatch => {
  return useDispatch()
}