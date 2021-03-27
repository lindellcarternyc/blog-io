import * as selectors from '../store/selectors'
import { useAppSelector } from '../store/hooks'
import * as ROUTES from '../constants/routes'

import { Grid, Button, Header } from 'semantic-ui-react'
import PostPreviewList from '../components/PostPreviewList'
import { PrivateRouteComponent } from '../components/PrivateRoute'

const Dashboard: PrivateRouteComponent = ({ user, history }) => {

  const posts = useAppSelector(selectors.currentUserPosts)
  const selectPost = (postID: string) => {
    history.push(ROUTES.ViewPost.replace(':postID', postID))
  }

  return (
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
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
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