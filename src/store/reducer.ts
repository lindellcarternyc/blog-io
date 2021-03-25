import { AppState, DefaultAppState } from './state'

import { 
  LoginAction,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SignupAction,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS
} from './actions'

const reducer = (state: AppState = DefaultAppState, action: LoginAction | SignupAction): AppState => {
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

    default: {
      return state
    }
  }
}

export default reducer