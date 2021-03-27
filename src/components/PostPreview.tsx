import { Item, Button } from 'semantic-ui-react'
import { PostModel } from '../models/Post.model'

interface PostPreviewProps {
  post: PostModel
  selectPost(id: string): void
  deletePost(id: string): void
}

const PostPreview = ({ post, selectPost, deletePost }: PostPreviewProps): JSX.Element => {
  const onClickPost = () => selectPost(post.id)
  const onClickDelete = () => deletePost(post.id)

  return (
    <Item>
      <Item.Content>
        <Item.Header onClick={onClickPost}>{post.title}</Item.Header>
        {post.subtitle && <Item.Meta>{post.subtitle}</Item.Meta>}
        <Item.Extra content={post.createdAt.toDateString()}/>
      </Item.Content>
      <Button onClick={onClickDelete}>Delete</Button>
    </Item>
  )
}

export default PostPreview