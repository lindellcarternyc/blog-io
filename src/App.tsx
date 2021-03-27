import { Switch, Route } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from './store/hooks'

import * as ROUTES from './constants/routes'

import Main from './components/Main'
import Navbar from './components/Navbar'

import HomePage from './pages/Home'
import CreatePostPage from './pages/CreatePost'
import DashboardPage from './pages/Dashboard'
import EditPostPage from './pages/EditPost'
import ViewPostPage from './pages/ViewPost'
import Login from './pages/Login'
import Signup from './pages/Signup'

import * as selectors from './store/selectors'
import { useEffect } from 'react'
import { fetchPosts } from './store/thunks/posts'

const App = () => {
  const currentUser = useAppSelector(selectors.currentUser)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchPosts({ userId: currentUser.id }))
    }
  }, [currentUser, dispatch])
  return (
    <div>
      <Navbar />
      <Main>
        <Switch>
          <Route path={ROUTES.Signup} component={Signup} />
          <Route path={ROUTES.Login} component={Login} />
          <Route path={ROUTES.EditPost} component={EditPostPage} />
          <Route path={ROUTES.CreatePost} component={CreatePostPage} />
          <Route path={ROUTES.ViewPost} component={ViewPostPage} />
          <Route path={ROUTES.Dashboard} component={DashboardPage} />
          <Route exact path={ROUTES.Home} component={HomePage} />
        </Switch>
      </Main>
    </div>
  )
}
export default App;
