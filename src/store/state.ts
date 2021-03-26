import { PostModel } from '../models/Post.model'
import { UserModel } from '../models/User.model'

type AsyncState<T> = {
  isLoading: boolean
  error: string | null
} & T


export type UserState = AsyncState<{ user: UserModel | null }>
export const DefaultUserState: UserState = {
  user: null,
  isLoading: false,
  error: null
}

export type PostsState = AsyncState<{ posts: PostModel[] }>
export const DefaultPostsState: PostsState = {
  posts: [],
  isLoading: false,
  error: null,
}

export interface AppState {
  userState: UserState,
  postsState: PostsState
}

export const DefaultAppState: AppState = {
  userState: DefaultUserState,
  postsState: DefaultPostsState
}