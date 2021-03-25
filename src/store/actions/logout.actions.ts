export const LOGOUT_REQUEST = '@@LOGOUT_REQUEST' as const
export const logoutRequest = () => ({ type: LOGOUT_REQUEST })

export type LogoutAction 
  = ReturnType<typeof logoutRequest>