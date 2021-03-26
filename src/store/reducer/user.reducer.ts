import { AppState, DefaultAppState } from '../state'

import { 
  LoginAction,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from '../actions/login.actions'

import { SignupAction, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from '../actions/signup.actions'

import { LogoutAction, LOGOUT_REQUEST } from '../actions/logout.actions'

const reducer = (state: AppState['userState'] = DefaultAppState.userState, action: LoginAction | SignupAction | LogoutAction): AppState['userState'] => {
  switch ( action.type ) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        user: null,
        error: null,
        isLoading: true
      }
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: null
      }
    }

    case LOGIN_FAILURE: {
      return {
        ...state,
        error: action.payload,
        user: null,
        isLoading: false
      }
    }

    case SIGNUP_FAILURE: {
      return {
        ...state,
        error: action.payload,
        user: null,
        isLoading: false
      }
    }

    case SIGNUP_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: null
      }
    }

    case SIGNUP_REQUEST: {
      return {
        ...state,
        user: null,
        isLoading: true,
        error: null
      }
    }

    case LOGOUT_REQUEST: {
      return {
        ...state,
        user: null,
        isLoading: false,
        error: null
      }
    }

    default: {
      return state
    }
  }
}

export default reducer