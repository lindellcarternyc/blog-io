export interface PostModel {
  id: string
  author: string
  title: string
  subtitle?: string
  content: string
  createdAt: Date
  editedAt: Date
}

export type CreatePostModel 
  = Omit<PostModel, 'id' | 'createdAt' | 'editedAt'>