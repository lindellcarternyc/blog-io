import { Redirect, useHistory, useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from '../store/hooks'

import { Grid, Header } from 'semantic-ui-react'
import PostForm, { PostFormData } from '../forms/PostForm' 

import * as selectors from '../store/selectors'
import * as ROUTES from '../constants/routes'
import { editPost } from '../store/thunks/posts'

const EditPost = (): JSX.Element => {
  const { postID } = useParams<{ postID: string }>()
  const postToEdit = useAppSelector(selectors.postById(postID))
  const dispatch = useAppDispatch()
  const history = useHistory()

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
    .then(post => {
      if (post) {
        history.push(ROUTES.ViewPost.replace(/:postID/, post.id))
      }
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