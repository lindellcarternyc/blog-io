import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'

import * as ROUTES from '../constants/routes'

import { useAppDispatch } from '../store/dispatch'
import { signupThunk } from '../store/thunks/signup.thunk'
import * as selectors from '../store/selectors'

import { Grid, Header } from 'semantic-ui-react'
import SignupForm from '../forms/SignupForm'


const Signup = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const isAuthenticated = useSelector(selectors.isAuthenticated)

  const onSignup = (data: { username: string, password: string }) => {
    dispatch(signupThunk(data))
  }

  if (isAuthenticated) {
    return <Redirect to={ROUTES.Dashboard}/>
  }

  return (
    <Grid textAlign="center" style={{ height: '100vh', marginTop: '' }}>
      <Grid.Column>
        <Header as="h2">Sign Up</Header>
        <SignupForm onSubmit={onSignup} />
      </Grid.Column>
    </Grid>
  )
}

export default Signup