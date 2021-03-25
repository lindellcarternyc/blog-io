// import { useForm } from 'react-hook-form'
import { useForm } from './hooks'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Form, Segment, Button } from 'semantic-ui-react'

import FormInput from './components/FormInput'

const schema = yup.object().shape({
  username: yup.string().required().min(5),
  password: yup.string().required().min(5)
})

interface LoginFormProps {
  onSubmit(data: { username: string, password: string }): void
}

const LoginForm = (props: LoginFormProps): JSX.Element => {
  const { control, handleSubmit, getError, formState } = useForm({
    defaultValues: {
      username: '',
      password: ''
    },
    mode: 'onTouched',
    resolver: yupResolver(schema)
  })

  return (
    <>
      <Form onSubmit={handleSubmit(props.onSubmit)} size="large">
        <Segment>
          <FormInput 
            id="username"
            control={control}
            icon="user"
            iconPosition="left"
            placeholder="Username"
            fluid
            error={getError('username')}
          />
          <FormInput 
            id="password"
            control={control}
            type="password"
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            fluid
            error={getError('password')}
          />
          <Button disabled={!formState.isValid} type="submit">Log In
          </Button>
        </Segment>
      </Form>
    </>
  )
}

export default LoginForm