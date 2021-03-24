export interface AppState {
  user: { 
    id: string 
    username: string
  } | null
  isLoading: boolean
  error: string | null
}

export const DefaultAppState: AppState = {
  user: null,
  isLoading: false,
  error: null
}