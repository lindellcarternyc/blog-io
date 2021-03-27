import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from './hooks'

import { CreatePostModel, PostModel } from '../models/Post.model'

import { Form, Segment, Button } from 'semantic-ui-react'
import FormInput from './components/FormInput'
import TextArea from './components/TextArea'
import { useEffect } from 'react'

export type PostFormData = Omit<CreatePostModel, 'author'>

const INITIAL_POST_FORM_DATA: PostFormData = {
  title: '',
  subtitle: '',
  content: ''
}

const schema = yup.object().shape({
  title: yup.string().required().min(5),
  subtitle: yup.string(),
  content: yup.string().required()
})


interface PostFormProps {
  onSubmit(data: PostFormData): void
  postToEdit?: PostModel
}

const PostForm = ({ onSubmit, postToEdit }: PostFormProps): JSX.Element => {
  const initialValues = postToEdit || INITIAL_POST_FORM_DATA
  const { control, handleSubmit, getError, formState, setValue } = useForm<PostFormData>({
    defaultValues: initialValues,
    mode: 'all',
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    if (postToEdit) {
      setValue('title', postToEdit.title)
      setValue('subtitle', postToEdit.subtitle)
      setValue('content', postToEdit.content)
    }
  }, [postToEdit, setValue])
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Segment>
        <FormInput 
          id="title"
          control={control}
          fluid
          placeholder="Title"
          error={getError('title')}
        />
        <FormInput 
          id="subtitle"
          control={control}
          fluid
          placeholder="Subtitle"
          error={getError('subtitle')}
        />
        <TextArea
          id="content"
          control={control}
          placeholder="Post content here..."
          fluid
          error={getError('content')}
        />
        <Button 
          style={{
            marginTop: '1rem'
          }}
          type="submit"
          disabled={!formState.isValid}
        >
          {postToEdit ? 'Edit' : 'Create New'} Post
        </Button>
      </Segment>
    </Form>
  )
}

export default PostForm