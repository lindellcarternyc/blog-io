import { DefaultPostsState, PostsState } from '../state'

import { 
  FetchPostsAction, FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS
} from '../actions/post.actions'

const postsReducer = (state: PostsState = DefaultPostsState, action: FetchPostsAction): PostsState => {
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
        ...state,
        isLoading: false,
        error: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export default postsReducer