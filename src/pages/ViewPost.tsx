import { useSelector } from 'react-redux'
import { Redirect, useParams } from 'react-router'
import PostView from '../components/PostView'

import * as selectors from '../store/selectors'
import * as ROUTES from '../constants/routes'

const ViewPost = (): JSX.Element => {
  const { postID } = useParams<{ postID: string }>()
  const post = useSelector(selectors.postById(postID))

  if (!post) {
    return <Redirect to={ROUTES.Dashboard} />
  }

  return (
    <div>
      <PostView post={post}/>
    </div>
  )
}

export default ViewPost