import { Redirect } from 'react-router'
import { useAppDispatch, useAppSelector } from '../store/hooks'

import * as ROUTES from '../constants/routes'

import { login } from '../store/features/users/users.slice'
import * as selectors from '../store/selectors'

import { Grid, Header } from 'semantic-ui-react'
import LoginForm from '../forms/LoginForm'


const Login = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const isAuthenticated = useAppSelector(selectors.isAuthenticated)

  const onLogin = (data: { username: string, password: string }) => {
    dispatch(login(data))
  }

  if (isAuthenticated) {
    return <Redirect to={ROUTES.Dashboard} />
  }
  
  return (
    <Grid textAlign="center" style={{ height: '100vh', marginTop: '-5rem'}} verticalAlign="middle">
      <Grid.Column>
        <Header as="h2">Login</Header>
        <LoginForm onSubmit={onLogin} />
      </Grid.Column>
    </Grid>
  )
}

export default Login