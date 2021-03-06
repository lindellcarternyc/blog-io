import { CreateUserModel, LoginUserModel, UserModel } from '../models/User.model'
import * as UserCollection from '../data/users'

import { CreatePostModel, PostModel } from '../models/Post.model'
import * as PostsCollection from '../data/posts'

export const login = async (data: LoginUserModel): Promise<UserModel> => {
  try {
    const user = await UserCollection.getUserByUsername(data.username)
    if (user) {
      if (user.password === data.password) {
        return {
          id: user.id,
          username: user.username
        }
      } else {
        throw new Error('Incorrect password')
      }
    }
    throw new Error('No User Found')
  } catch (err) {
    throw err
  }
}

export const signup = async (data: CreateUserModel): Promise<UserModel> => {
  try {
    const newUser = await UserCollection.createUser(data)
    return newUser
  } catch (err) {
    throw err
  }
}

export const logout = async () => {
  return
}

export const fetchPostsByAuthorId = async (authorId: string): Promise<PostModel[]> => {
  try {
    const posts = await PostsCollection.getPostsByAuthorId(authorId)
    return posts
  } catch (err) {
    throw err
  }
}

export const createPost = async (data: CreatePostModel): Promise<PostModel> => {
  try {
    const newPost = await PostsCollection.createPost(data)
    return newPost
  } catch (err) {
    throw err
  }
} 

export const editPost = async (post: PostModel): Promise<PostModel> => {
  try {
    const newPost = await PostsCollection.updatePost(post)
    return newPost
  } catch (err) {
    throw err
  }
}

export const deletePost = async (id: string): Promise<string> => {
  try {
    const deletedPostId = await PostsCollection.deletePost({ id })
    return deletedPostId
  } catch (err) {
    throw err
  }
}