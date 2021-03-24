import { Switch, Route } from 'react-router-dom'

import * as ROUTES from './constants/routes'

import Navbar from './components/Navbar'

import HomePage from './pages/Home'
import CreatePostPage from './pages/CreatePost'
import DashboardPage from './pages/Dashboard'
import EditPostPage from './pages/EditPost'
import ViewPostPage from './pages/ViewPost'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path={ROUTES.Signup} component={Signup} />
        <Route path={ROUTES.Login} component={Login} />
        <Route path={ROUTES.ViewPost} component={ViewPostPage} />
        <Route path={ROUTES.EditPost} component={EditPostPage} />
        <Route path={ROUTES.Dashboard} component={DashboardPage} />
        <Route path={ROUTES.CreatePost} component={CreatePostPage} />
        <Route exact path={ROUTES.Home} component={HomePage} />
      </Switch>
    </div>
  )
}
export default App;
