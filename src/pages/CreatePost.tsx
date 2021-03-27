import { useAppDispatch } from '../store/hooks'

import { Grid, Header } from 'semantic-ui-react'

import PostForm, { PostFormData } from '../forms/PostForm'
import * as ROUTES from '../constants/routes'

import { createPost } from '../store/features/posts/posts.slice'
import { PrivateRouteComponent } from '../components/PrivateRoute'

const CreatePost: PrivateRouteComponent = ({ user, history }) => {
  const dispatch = useAppDispatch()

  const onSubmit = (data: PostFormData) => {
    dispatch(createPost({
      ...data,
      author: user.id
    })).then(({ payload }) => {
      const { id } = payload as { id: string }
      history.push(ROUTES.ViewPost.replace(/:postID/, id))
    })
  }

  

  return (
    <Grid>
      <Grid.Column>
        <Header as="h2">Create New Post</Header>
        <PostForm onSubmit={onSubmit}/>
      </Grid.Column>
    </Grid>
  )
}

export default CreatePost