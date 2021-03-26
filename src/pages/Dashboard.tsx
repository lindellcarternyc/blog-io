import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'

import * as selectors from '../store/selectors'
import * as ROUTES from '../constants/routes'

import { Grid, Button, Header } from 'semantic-ui-react'
import { PostModel } from '../models/Post.model'
import PostPreviewList from '../components/PostPreviewList'

const POSTS: PostModel[] = [
  { 
    id: 'post1',
    title: 'post1',
    createdAt: new Date(),
    editedAt: new Date(),
    author: 'Lindell',
    content: 'This is a post'
  }, {
    id: 'post2',
    title: 'post2',
    subtitle: 'A post with a subtitle',
    createdAt: new Date(),
    editedAt: new Date(),
    author: 'Lindell',
    content: 'This is the second post'
  }
]
const Dashboard = (): JSX.Element => {
  const currentUser = useSelector(selectors.currentUser)
  if (!currentUser) {
    return <Redirect to={ROUTES.Home} />
  }
  
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={4}>Image</Grid.Column>
        <Grid.Column>
          <Header>{currentUser.username}</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Button>New Post</Button>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1}>
        <Grid.Column>
          <PostPreviewList 
            posts={POSTS}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Dashboard