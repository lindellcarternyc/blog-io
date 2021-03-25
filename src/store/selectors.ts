import { AppState } from './state'

export const isAuthenticated = (state: AppState): boolean => {
  return state.user !== null
}