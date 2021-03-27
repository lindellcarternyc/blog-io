import { ItemGroup } from 'semantic-ui-react'

import { PostModel } from '../models/Post.model'
import PostPreview from './PostPreview'

interface PostPreviewListProps {
  posts: PostModel[]
  selectPost(postID: string): void
  deletePost(postID: string): void
}

const PostPreviewList = (props: PostPreviewListProps): JSX.Element => {
  return (
    <ItemGroup divided link>
      {props.posts.map(post => {
        return (
          <PostPreview key={post.id} post={post} selectPost={props.selectPost} deletePost={props.deletePost}/>
        )
      })}
    </ItemGroup>
  )
}

export default PostPreviewList