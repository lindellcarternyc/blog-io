export interface PostModel {
  id: string
  author: string
  title: string
  subtitle?: string
  content: string
  createdAt: Date
  editedAt: Date
}