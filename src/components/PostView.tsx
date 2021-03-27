import { 
  Container,
  Header,
  Button
} from 'semantic-ui-react'

import ReactMarkdown from 'react-markdown'

import { PostModel } from '../models/Post.model'

interface ViewPostProps {
  post: PostModel
  onClickEdit(): void
}


const PostView = ({ post, onClickEdit }: ViewPostProps): JSX.Element => {
  return (
    <Container text>
      <Button onClick={onClickEdit}>Edit Post</Button>
      <Header as="h2" content={post.title} subheader={post.subtitle || undefined} />
      <div>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </Container>
  )
}

export default PostView