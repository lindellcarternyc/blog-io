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