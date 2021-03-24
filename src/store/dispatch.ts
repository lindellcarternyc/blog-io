import { ThunkDispatch } from 'redux-thunk'

import { AppState } from './state'

import * as login from './actions'

export type AppDispatch = ThunkDispatch<AppState, any, login.LoginAction>