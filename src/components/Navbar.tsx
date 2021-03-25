import { Link } from 'react-router-dom'
import { useAppDispatch } from '../store/dispatch'

import * as ROUTES from '../constants/routes'
import { logoutRequest } from '../store/actions/logout.actions'

const Navbar = () => {
  const dispatch = useAppDispatch()

  const onClickLogout = () => {
    dispatch(logoutRequest())
  }

  return (
    <div>
      <nav>
        <Link to={ROUTES.Home}>Home</Link>
        <Link to={ROUTES.Dashboard}>Dashbard</Link>
        <Link to={ROUTES.CreatePost}>Create Post</Link>
        <Link to={ROUTES.Login}>Login</Link>
        <Link to={ROUTES.Signup}>Signup</Link>
      </nav>
      <button onClick={onClickLogout}>Log Out</button>
    </div>
  )
}

export default Navbar