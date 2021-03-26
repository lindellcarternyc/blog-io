import { useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import { Grid, Header } from 'semantic-ui-react'

import CreatePostForm, { CreatePostFormData } from '../forms/CreatePostForm'
import { useAppDispatch } from '../store/dispatch'

import { createPost } from '../store/thunks/posts'
import * as selectors from '../store/selectors'
import * as ROUTES from '../constants/routes'

const CreatePost = (): JSX.Element => {
  const currentUser = useSelector(selectors.currentUser)
  const history = useHistory()
  const dispatch = useAppDispatch()
  if (!currentUser) {
    return <Redirect to={ROUTES.Home}/>
  }

  const onSubmit = (data: CreatePostFormData) => {
    console.log(data)
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
        <CreatePostForm onSubmit={onSubmit}/>
      </Grid.Column>
    </Grid>
  )
}

export default CreatePost