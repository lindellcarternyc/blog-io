import { Redirect, useHistory } from 'react-router'
import { useAppDispatch, useAppSelector } from '../store/hooks'

import { Grid, Header } from 'semantic-ui-react'

import PostForm, { PostFormData } from '../forms/PostForm'

import { createPost } from '../store/thunks/posts'
import * as selectors from '../store/selectors'
import * as ROUTES from '../constants/routes'

const CreatePost = (): JSX.Element => {
  const currentUser = useAppSelector(selectors.currentUser)
  const history = useHistory()
  const dispatch = useAppDispatch()
  if (!currentUser) {
    return <Redirect to={ROUTES.Home}/>
  }

  const onSubmit = (data: PostFormData) => {
    dispatch(createPost({
      ...data,
      author: currentUser.id
    })).then((newPost) => {
      if (newPost) {
        history.push(ROUTES.ViewPost.replace(/:\w*/, newPost.id))
      }
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