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


export const SIGNUP_REQUEST = '@@SIGNUP_REQUEST' as const
export const signupRequest = () => ({ type: SIGNUP_REQUEST })

export const SIGNUP_SUCCESS = '@@SIGNUP_SUCCESS' as const
export const signupSuccess = (user: { username: string, id: string }) => ({
  type: SIGNUP_SUCCESS,
  payload: user
})

export const SIGNUP_FAILURE = '@@SIGNUP_FAILURE' as const
export const signupFailure = (error: string) => ({
  type: SIGNUP_FAILURE,
  payload: error
})

export type SignupAction 
  = ReturnType<typeof signupRequest>
  | ReturnType<typeof signupSuccess>
  | ReturnType<typeof signupFailure>