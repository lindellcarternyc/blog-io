export const LOGIN_REQUEST = '@@LOGIN_REQUEST' as const

export const loginRequest = () => ({
  type: LOGIN_REQUEST
})

export const LOGIN_SUCCESS = '@@LOGIN_SUCCESS' as const
export const loginSuccess = (user: { id: string, username: string }) => ({
  type: LOGIN_SUCCESS,
  payload: user
})

export const LOGIN_FAILURE = '@@LOGIN_FAILURE' as const
export const loginFailure = (error: string) => ({
  type: LOGIN_FAILURE,
  payload: error
})

export type LoginAction 
  = ReturnType<typeof loginRequest>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>