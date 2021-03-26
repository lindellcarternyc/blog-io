import { AppDispatch } from '../dispatch'
import { fetchPostsSuccess, fetchPostsFailure, fetchPostsRequest } from '../actions/post.actions'
import * as api from '../../api'

export const fetchPosts = (data: { userId: string }) => async (dispatch: AppDispatch) => {
  console.log('fetchPostsThunk')
  dispatch(fetchPostsRequest())

  try {
    const posts = await api.fetchPostsByAuthorId(data.userId)
    dispatch(fetchPostsSuccess(posts))
  } catch (err) {
    dispatch(fetchPostsFailure(err.message))
  }
}