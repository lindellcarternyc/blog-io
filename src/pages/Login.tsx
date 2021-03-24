import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store/dispatch'

import { loginThunk } from '../store/thunks'

const Login = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch()

  const onLogin = (data: { username: string, password: string }) => {
    dispatch(loginThunk(data))
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={}></button>
    </div>
  )
}

export default Login