import { AppState, DefaultAppState } from './state'

import * as loginActions from './actions'

const reducer = (state: AppState = DefaultAppState, action: loginActions.LoginAction): AppState => {
  switch ( action.type ) {
    case loginActions.LOGIN_REQUEST: {
      return {
        ...state,
        user: null,
        error: null,
        isLoading: true
      }
    }

    case loginActions.LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: null
      }
    }

    case loginActions.LOGIN_FAILURE: {
      return {
        ...state,
        error: action.payload,
        user: null,
        isLoading: false
      }
    }

    default: {
      return state
    }
  }
}

export default reducer