import { Link } from 'react-router-dom'

import * as ROUTES from '../constants/routes'

const Navbar = () => {
  return (
    <nav>
      <Link to={ROUTES.Home}>Home</Link>
      <Link to={ROUTES.Dashboard}>Dashbard</Link>
      <Link to={ROUTES.CreatePost}>Create Post</Link>
      <Link to={ROUTES.Login}>Login</Link>
    </nav>
  )
}

export default Navbar