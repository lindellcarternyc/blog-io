import { AppState } from './state'

export const isAuthenticated = (state: AppState): boolean => {
  return state.user !== null
}

export const currentUser = (state: AppState): { username: string, id: string } | null => {
  return state.user
}