import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'

import * as ROUTES from '../constants/routes'

import { useAppDispatch} from '../store/dispatch'
import { loginThunk } from '../store/thunks'
import * as selectors from '../store/selectors'

import LoginForm from '../forms/LoginForm'


const Login = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const isAuthenticated = useSelector(selectors.isAuthenticated)

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