import { v4 as uuid } from 'uuid'
import { CreatePostModel, PostModel } from '../models/Post.model'

const POSTS: Record<string, PostModel> = {
  post1: {
    id: 'post1',
    author: 'user1',
    title: 'Post 1',
    subtitle: 'Post subtitle',
    content: 'Paragraphs...',
    createdAt: new Date(),
    editedAt: new Date()
  }
}

const makePost = (data: CreatePostModel): PostModel => {
  return {
    ...data,
    createdAt: new Date(),
    editedAt: new Date(),
    id: uuid()
  }
}

export const getPostsByAuthorId = async (authorId: string): Promise<PostModel[]> => {
  return Object.keys(POSTS).map(id => POSTS[id]).filter(post => post.author === authorId)
}

export const createPost = async (data: CreatePostModel): Promise<PostModel> => {
  const newPost = makePost(data)
  POSTS[newPost.id] = newPost
  return newPost
}

export const updatePost = async (data: PostModel): Promise<PostModel> => {
  const updatedPost: PostModel = {
    ...data,
    editedAt: new Date()
  }
  POSTS[updatedPost.id] = updatedPost
  return updatedPost
}