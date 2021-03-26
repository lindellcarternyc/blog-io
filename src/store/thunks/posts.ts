import { AppDispatch } from '../dispatch'

import { fetchPostsSuccess, fetchPostsFailure, fetchPostsRequest, createPostFailure, createPostSuccess, createPostRequest } from '../actions/post.actions'
import * as api from '../../api'

import { CreatePostModel } from '../../models/Post.model'

export const fetchPosts = (data: { userId: string }) => async (dispatch: AppDispatch) => {
  dispatch(fetchPostsRequest())

  try {
    const posts = await api.fetchPostsByAuthorId(data.userId)
    dispatch(fetchPostsSuccess(posts))
  } catch (err) {
    dispatch(fetchPostsFailure(err.message))
  }
}

export const createPost = (data: CreatePostModel) => async (dispatch: AppDispatch) => {
  dispatch(createPostRequest())

  try {
    const newPost = await api.createPost(data)
    dispatch(createPostSuccess(newPost))
    return newPost
  } catch (err) {
    dispatch(createPostFailure(err.message))
  }
}