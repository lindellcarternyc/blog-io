import { ItemGroup } from 'semantic-ui-react'

import { PostModel } from '../models/Post.model'
import PostPreview from './PostPreview'

interface PostPreviewListProps {
  posts: PostModel[]
}

const PostPreviewList = (props: PostPreviewListProps): JSX.Element => {
  return (
    <ItemGroup divided link>
      {props.posts.map(post => {
        return (
          <PostPreview key={post.id} post={post} selectPost={id => console.log(id)}/>
        )
      })}
    </ItemGroup>
  )
}

export default PostPreviewList