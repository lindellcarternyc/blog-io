import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import {
  Container,
  Menu,
  Button
} from 'semantic-ui-react'

import * as ROUTES from '../constants/routes'
import { logoutRequest } from '../store/actions/logout.actions'
import { useAppDispatch } from '../store/dispatch'
import * as selectors from '../store/selectors'

const Navbar = () => {
  const dispatch = useAppDispatch()
  const isAuthenticated = useSelector(selectors.isAuthenticated)
  const history = useHistory()

  const onClickLogout = () => {
    dispatch(logoutRequest())
  }

  const authButtons = (): JSX.Element => {
    if (isAuthenticated) {
      return <Menu.Item><Button onClick={onClickLogout}>Log Out</Button></Menu.Item>
    }
    return (
      <>
        <Menu.Item>
          <Button onClick={() => history.push(ROUTES.Login)}>Log In</Button>
        </Menu.Item>
        <Menu.Item>
          <Button onClick={() => history.push(ROUTES.Signup)}>Sign Up</Button>
        </Menu.Item>
      </>
    )
  }

  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header><Link to={ROUTES.Home}>Home</Link></Menu.Item>
        {isAuthenticated && (
          <>
            <Menu.Item><Link to={ROUTES.Dashboard}>Dashboard</Link></Menu.Item>
            <Menu.Item><Link to={ROUTES.CreatePost}>Create Post</Link></Menu.Item>
          </>
        )}
        <Menu.Menu position="right">
          {authButtons()}
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default Navbar