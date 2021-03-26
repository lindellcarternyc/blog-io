import { PostModel } from '../models/Post.model'
import { AppState } from './state'

export const isAuthenticated = (state: AppState): boolean => {
  return state.userState.user !== null
}

export const currentUser = (state: AppState): { username: string, id: string } | null => {
  return state.userState.user
}

export const currentUserPosts = (state: AppState): PostModel[] => {
  return state.postsState.posts
}

export const postById = (postID: string) => (state: AppState): PostModel | null => {
  const allPosts = state.postsState.posts
  for (const post of allPosts) {
    if (post.id === postID) {
      return post
    }
  }
  return null
}