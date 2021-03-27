import { Redirect, Route, RouteProps, RouteComponentProps } from 'react-router-dom'

import * as ROUTES from '../constants/routes'
import * as selectors from '../store/selectors'
import { useAppSelector } from '../store/hooks'
import { UserModel } from '../models/User.model'
import React from 'react'

export interface PrivateRouteComponentProps extends RouteComponentProps {
  user: UserModel
}

export type PrivateRouteComponent = React.ComponentType<PrivateRouteComponentProps>

interface PrivateRouteProps extends RouteProps {
  component: PrivateRouteComponent
}

const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps): JSX.Element => {
  const user = useAppSelector(selectors.currentUser)

  return (
    <Route 
      { ...rest }
      render={(props) => {
        if (!user) {
          return <Redirect to={ROUTES.Login} />
        }
        return <Component user={user} {...props} />
      }}
    />
  )
}

export default PrivateRoute