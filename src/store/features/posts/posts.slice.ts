import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CreatePostModel, PostModel } from '../../../models/Post.model'
import { AsyncState } from '../../state'

import * as api from '../../../api'

export type PostsState = AsyncState<{ posts: PostModel[] }>
export const DefaultPostsState: PostsState = {
  posts: [],
  isLoading: false,
  error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (authorId: string) => {
  try {
    const posts = await api.fetchPostsByAuthorId(authorId)
    return posts
  } catch (err) {
    throw err.message
  }
})

export const createPost = createAsyncThunk('posts/createPost', async (data: CreatePostModel) => {
  try {
    const newPost = await api.createPost(data)
    return newPost
  } catch (err) {
    throw err.message
  }
})

export const editPost = createAsyncThunk('posts/editPost', async (data: PostModel) => {
  try {
    const editedPost = await api.editPost(data)
    return editedPost
  } catch (err) {
    throw err.message
  }
})

const postsSlice = createSlice({
  name: 'posts',
  initialState: DefaultPostsState,
  reducers: {

  },
  extraReducers: builder => {
    builder
      // Fetch posts
      .addCase(fetchPosts.pending, state => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        state.posts = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      // Create post
      .addCase(createPost.pending, (state) => {
        state.isLoading = false
        state.error = null
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.posts.push(action.payload)
        state.error = null
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      // Edit post
      .addCase(editPost.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.error = null
        state.isLoading = false
        
        const idx = state.posts.findIndex(post => post.id === action.payload.id)
        state.posts[idx] = action.payload
      })
  }
})

export default postsSlice.reducer