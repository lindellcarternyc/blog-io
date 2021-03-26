import { Item } from 'semantic-ui-react'
import { PostModel } from '../models/Post.model'

interface PostPreviewProps {
  post: PostModel
  selectPost(id: string): void
}

const PostPreview = ({ post, selectPost }: PostPreviewProps): JSX.Element => {
  const onClickPost = () => selectPost(post.id)

  return (
    <Item onClick={onClickPost}>
      <Item.Content>
        <Item.Header>{post.title}</Item.Header>
        {post.subtitle && <Item.Meta>{post.subtitle}</Item.Meta>}
        <Item.Extra content={post.createdAt.toDateString()}/>
      </Item.Content>
    </Item>
  )
}

export default PostPreview