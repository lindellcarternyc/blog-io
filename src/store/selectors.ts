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