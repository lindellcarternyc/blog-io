import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'

import * as selectors from '../store/selectors'
import * as ROUTES from '../constants/routes'

import { Grid, Button, Header } from 'semantic-ui-react'
import PostPreviewList from '../components/PostPreviewList'
import { useEffect } from 'react'

const Dashboard = (): JSX.Element => {
  const currentUser = useSelector(selectors.currentUser)
  const posts = useSelector(selectors.currentUserPosts)

  useEffect(() => {

  })

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
            posts={posts}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Dashboard