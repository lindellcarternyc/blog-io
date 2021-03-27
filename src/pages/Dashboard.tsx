import { useState } from 'react'
import { Grid, Button, Header } from 'semantic-ui-react'

import * as ROUTES from '../constants/routes'
import * as selectors from '../store/selectors'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { deletePost } from '../store/features/posts/posts.slice'

import { PostModel } from '../models/Post.model'

import PostPreviewList from '../components/PostPreviewList'
import { PrivateRouteComponent } from '../components/PrivateRoute'
import DeleteModal from '../components/DeleteModal'

const Dashboard: PrivateRouteComponent = ({ user, history }) => {
  const [postToDelete, setPostToDelete] = useState<PostModel | null>(null)
  const dispatch = useAppDispatch()
  const posts = useAppSelector(selectors.currentUserPosts)
  const selectPost = (postID: string) => {
    history.push(ROUTES.ViewPost.replace(':postID', postID))
  }

  const onClickDeletePost = (postID: string) => {
    const toDelete = posts.find(p => p.id === postID)
    if (toDelete) {
      setPostToDelete(toDelete)
    }
  }

  const confirmDeletePost = () => {
    if (postToDelete) {
      dispatch(deletePost(postToDelete))
        .then(() => setPostToDelete(null))
        .catch(err => {
          throw err
        })
    }
  }

  const cancelDeletePost = () => {
    setPostToDelete(null)
  }
  
  return (
    <>
      {postToDelete && (
        <DeleteModal 
          post={postToDelete}
          open={true}
          onCancel={cancelDeletePost}
          onConfirm={confirmDeletePost}
        />
      )}
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>Image</Grid.Column>
          <Grid.Column>
            <Header>{user.username}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Button onClick={() => history.push(ROUTES.CreatePost)}>New Post</Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <PostPreviewList 
              posts={posts}
              selectPost={selectPost}
              deletePost={onClickDeletePost}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

// const Dashboard = (): JSX.Element => {
//   const currentUser = useAppSelector(selectors.currentUser)
//   const posts = useAppSelector(selectors.currentUserPosts)
//   const history = useHistory()
// 
//   if (!currentUser) {
//     return <Redirect to={ROUTES.Home} />
//   }
// 
//   const selectPost = (postID: string) => {
//     const url = ROUTES.ViewPost.replace(/:postID/, postID)
//     history.push(url)
//   }
//   
//   return (
//     <Grid>
//       <Grid.Row>
//         <Grid.Column width={4}>Image</Grid.Column>
//         <Grid.Column>
//           <Header>{currentUser.username}</Header>
//         </Grid.Column>
//       </Grid.Row>
//       <Grid.Row>
//         <Grid.Column>
//           <Button onClick={() => history.push(ROUTES.CreatePost)}>New Post</Button>
//         </Grid.Column>
//       </Grid.Row>
//       <Grid.Row columns={1}>
//         <Grid.Column>
//           <PostPreviewList 
//             posts={posts}
//             selectPost={selectPost}
//           />
//         </Grid.Column>
//       </Grid.Row>
//     </Grid>
//   )
// }

export default Dashboard