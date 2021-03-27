import { useSelector } from 'react-redux'
import { Redirect, useHistory, useParams } from 'react-router'
import PostView from '../components/PostView'

import * as selectors from '../store/selectors'
import * as ROUTES from '../constants/routes'

const ViewPost = (): JSX.Element => {
  const { postID } = useParams<{ postID: string }>()
  const post = useSelector(selectors.postById(postID))
  const history = useHistory()

  if (!post) {
    return <Redirect to={ROUTES.Dashboard} />
  }

  const onClickEdit = () => {
    const url = ROUTES.EditPost.replace(/:postID/, postID)
    history.push(url)
  }

  return (
    <div>
      <PostView post={post} onClickEdit={onClickEdit}/>
    </div>
  )
}

export default ViewPost