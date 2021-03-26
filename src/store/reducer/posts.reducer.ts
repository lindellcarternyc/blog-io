import { DefaultPostsState, PostsState } from '../state'

import { 
  FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS,
  CREATE_POST_FAILURE, CREATE_POST_REQUEST, CREATE_POST_SUCCESS,
  PostAction
} from '../actions/post.actions'

const postsReducer = (state: PostsState = DefaultPostsState, action: PostAction): PostsState => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST: {
      return {
        createdPostId: null,
        posts: [],
        isLoading: true,
        error: null
      }
    }

    case FETCH_POSTS_SUCCESS: {
      return {
        createdPostId: null,
        posts: action.payload,
        isLoading: false,
        error: null
      }
    }

    case FETCH_POSTS_FAILURE: {
      return {
        createdPostId: null,
        posts: state.posts,
        isLoading: false,
        error: action.payload
      }
    }

    case CREATE_POST_REQUEST: {
      return {
        posts: state.posts,
        createdPostId: null,
        isLoading: true,
        error: null
      }
    }

    case CREATE_POST_SUCCESS: {
      return {
        createdPostId: action.payload.id,
        error: null,
        isLoading: false,
        posts: state.posts.concat(action.payload)
      }
    }

    case CREATE_POST_FAILURE: {
      return {
        posts: state.posts,
        createdPostId: null,
        error: action.payload,
        isLoading: false
      }
    }

    default: {
      return state
    }
  }
}

export default postsReducer