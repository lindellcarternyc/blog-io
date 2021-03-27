import { DefaultPostsState, PostsState } from '../state'

import { 
  FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS,
  CREATE_POST_FAILURE, CREATE_POST_REQUEST, CREATE_POST_SUCCESS,
  PostAction,
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE
} from '../actions/post.actions'

const findAndReplace = <T extends { id: string }>(arr: T[], newItem: T): T[] => {
  const idx = arr.findIndex(item => item.id === newItem.id)
  const result = [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
  return result
}

const postsReducer = (state: PostsState = DefaultPostsState, action: PostAction): PostsState => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST: {
      return {
        posts: [],
        isLoading: true,
        error: null
      }
    }

    case FETCH_POSTS_SUCCESS: {
      return {
        posts: action.payload,
        isLoading: false,
        error: null
      }
    }

    case FETCH_POSTS_FAILURE: {
      return {
        posts: state.posts,
        isLoading: false,
        error: action.payload
      }
    }

    case CREATE_POST_REQUEST: {
      return {
        posts: state.posts,
        isLoading: true,
        error: null
      }
    }

    case CREATE_POST_SUCCESS: {
      return {
        error: null,
        isLoading: false,
        posts: state.posts.concat(action.payload)
      }
    }

    case CREATE_POST_FAILURE: {
      return {
        posts: state.posts,
        error: action.payload,
        isLoading: false
      }
    }

    case EDIT_POST_REQUEST: {
      return {
        ...state,
        isLoading: true
      }
    }

    case EDIT_POST_SUCCESS: {
      // const idx = state.posts.findIndex(post => post.id === action.payload.id)
      // const posts = state.posts.filter(post => post.id !== action.payload.id).concat(action.payload)
      // console.log(posts)
      const posts = findAndReplace(state.posts, action.payload)
      console.log(posts)
      return {
        ...state,
        error: null,
        isLoading: false,
        posts
      }
    }

    case EDIT_POST_FAILURE: {
      return {
        error: action.payload,
        isLoading: false,
        posts: state.posts
      }
    }

    default: {
      return state
    }
  }
}

export default postsReducer