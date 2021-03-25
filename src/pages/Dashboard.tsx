import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'

import * as selectors from '../store/selectors'
import * as ROUTES from '../constants/routes'

const Dashboard = (): JSX.Element => {
  const isAuthenticated = useSelector(selectors.isAuthenticated)

  if (!isAuthenticated) {
    return <Redirect to={ROUTES.Home} />
  }
  
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard