import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from './hooks'

import { Form, Segment, Button } from 'semantic-ui-react'
import FormInput from './components/FormInput'
import TextArea from './components/TextArea'
import { CreatePostModel } from '../models/Post.model'

const schema = yup.object().shape({
  title: yup.string().required().min(5),
  subtitle: yup.string(),
  content: yup.string().required()
})

export type CreatePostFormData = Omit<CreatePostModel, 'author'>

interface CreatePostFormProps {
  onSubmit(data: CreatePostFormData): void
}

const CreatePostForm = (props: CreatePostFormProps): JSX.Element => {
  const { control, handleSubmit, getError, formState } = useForm({
    defaultValues: {
      title: '',
      subtitle: '',
      content: ''
    },
    mode: 'onTouched',
    resolver: yupResolver(schema)
  })

  return (
    <Form onSubmit={handleSubmit(props.onSubmit, (err => {
      console.log(err)
    }))}>
      <Segment>
        <FormInput 
          id="title"
          control={control}
          placeholder="Title"
          error={getError('title')}
          fluid
        />
        <FormInput 
          id="subtitle"
          control={control}
          fluid
          placeholder="Subtitle"
          error={getError('subtitle')}
        />
        <TextArea id="content" control={control} placeholder="Post Content"/>
        <Button style={{ marginTop: '1rem' }} type="submit" disabled={!formState.isValid}>Create Post</Button>
      </Segment>
    </Form>
  )
}

export default CreatePostForm