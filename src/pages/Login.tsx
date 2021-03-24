import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'

import * as ROUTES from '../constants/routes'

import { AppDispatch } from '../store/dispatch'
import { loginThunk } from '../store/thunks'
import { AppState } from '../store/state'

import LoginForm from '../forms/LoginForm'


const Login = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch()
  const isAuthenticated = useSelector<AppState, boolean>(state => state.user !== null)

  const onLogin = (data: { username: string, password: string }) => {
    dispatch(loginThunk(data))
  }

  if (isAuthenticated) {
    return <Redirect to={ROUTES.Dashboard} />
  }
  
  return (
    <div>
      <h2>Login</h2>
      <LoginForm onSubmit={onLogin} />
    </div>
  )
}

export default Login