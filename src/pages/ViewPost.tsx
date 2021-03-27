import { Redirect, useParams } from 'react-router'
import PostView from '../components/PostView'

import * as selectors from '../store/selectors'
import { useAppSelector } from '../store/hooks'
import * as ROUTES from '../constants/routes'
import { PrivateRouteComponent } from '../components/PrivateRoute'

const ViewPost: PrivateRouteComponent = ({ history }) => {
  const { postID } = useParams<{ postID: string }>()
  const post = useAppSelector(selectors.postById(postID))

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