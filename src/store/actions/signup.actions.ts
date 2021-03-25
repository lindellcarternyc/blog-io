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