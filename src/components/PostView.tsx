import { 
  Container,
  Header
} from 'semantic-ui-react'

import ReactMarkdown from 'react-markdown'

import { PostModel } from '../models/Post.model'

interface ViewPostProps {
  post: PostModel
}


const PostView = ({ post }: ViewPostProps): JSX.Element => {
  return (
    <Container text>
      <Header as="h2" content={post.title} subheader={post.subtitle || undefined} />
      <div>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </Container>
  )
}

export default PostView