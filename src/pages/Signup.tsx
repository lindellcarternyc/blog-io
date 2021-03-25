import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'

import * as ROUTES from '../constants/routes'

import { useAppDispatch } from '../store/dispatch'
import { signupThunk } from '../store/thunks/signup.thunk'
import * as selectors from '../store/selectors'



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
    <div>
      <h2>Sign Up</h2>
      <SignupForm onSubmit={onSignup} />
    </div>
  )
}

export default Signup