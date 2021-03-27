import { PostModel } from "../../models/Post.model"

export const FETCH_POSTS_REQUEST = '@@FETCH_POSTS_REQUEST' as const
export const fetchPostsRequest = () => ({ type: FETCH_POSTS_REQUEST })

export const FETCH_POSTS_SUCCESS = '@@FETCH_POSTS_SUCCESS' as const
export const fetchPostsSuccess = (posts: PostModel[]) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  }
}

export const FETCH_POSTS_FAILURE = '@@FETCH_POSTS_FAILURE' as const
export const fetchPostsFailure = (error: string) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  }
}

export type FetchPostsAction 
  = ReturnType<typeof fetchPostsRequest>
  | ReturnType<typeof fetchPostsFailure>
  | ReturnType<typeof fetchPostsSuccess>

export const CREATE_POST_REQUEST = '@@CREATE_POST_REQUEST' as const
export const createPostRequest = () => ({ type: CREATE_POST_REQUEST })

export const CREATE_POST_SUCCESS = '@@CREATE_POST_SUCCESS' as const
export const createPostSuccess = (post: PostModel) => {
  return {
    type: CREATE_POST_SUCCESS,
    payload: post
  }
}

export const CREATE_POST_FAILURE = '@@CREATE_POST_FAILURE' as const
export const createPostFailure = (error: string) => {
  return {
    type: CREATE_POST_FAILURE,
    payload: error
  }
}

export type CreatePostAction 
  = ReturnType<typeof createPostRequest>
  | ReturnType<typeof createPostSuccess>
  | ReturnType<typeof createPostFailure>


export const EDIT_POST_REQUEST = '@@EDIT_POST_REQUEST' as const
export const editPostRequest = () => ({ type: EDIT_POST_REQUEST })

export const EDIT_POST_SUCCESS = '@@EDIT_POST_SUCCESS' as const
export const editPostSuccess = (post: PostModel) => {
  return {
    type: EDIT_POST_SUCCESS,
    payload: post
  }
}

export const EDIT_POST_FAILURE = '@@EDIT_POST_FAILURE' as const
export const editPostFailure = (error: string) => ({
  type: EDIT_POST_FAILURE,
  payload: error
})

export type EditPostAction 
  = ReturnType<typeof editPostFailure>
  | ReturnType<typeof editPostRequest>
  | ReturnType<typeof editPostSuccess>
  

export type PostAction 
  = FetchPostsAction
  | CreatePostAction
  | EditPostAction