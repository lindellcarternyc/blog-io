import { Redirect, useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from '../store/hooks'

import { Grid, Header } from 'semantic-ui-react'
import PostForm, { PostFormData } from '../forms/PostForm' 

import * as selectors from '../store/selectors'
import * as ROUTES from '../constants/routes'

import { editPost } from '../store/features/posts/posts.slice'
import { PrivateRouteComponent } from '../components/PrivateRoute'

const EditPost: PrivateRouteComponent = ({ history }) => {
  const { postID } = useParams<{ postID: string }>()
  const postToEdit = useAppSelector(selectors.postById(postID))
  const dispatch = useAppDispatch()

  if (!postToEdit) {
    return <Redirect to={ROUTES.Dashboard} />
  }

  const onSubmit = (data: PostFormData) => {
    const { title, subtitle, content } = data
    dispatch(editPost({
      title, subtitle, content,
      author: postToEdit.author,
      createdAt: postToEdit.createdAt,
      editedAt: postToEdit.editedAt,
      id: postToEdit.id
    }))
    .then((action) => {
      const { id } = action.payload as { id: string }
      history.push(ROUTES.ViewPost.replace(/:postID/, id))
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <Grid>
      <Grid.Column>
        <Header as="h2" content="Edit Post" />
        <PostForm 
          onSubmit={onSubmit}
          postToEdit={postToEdit}
        />
      </Grid.Column>
    </Grid>
  )
}

export default EditPost