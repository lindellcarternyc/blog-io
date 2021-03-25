import { useForm } from './hooks'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Form, Segment, Button } from 'semantic-ui-react'
import FormInput from './components/FormInput'

const schema = yup.object().shape({
  username: yup.string().required().min(5),
  password: yup.string().required().min(5),
  confirmPassword: yup.string().required().oneOf([yup.ref('password')], "Confirm password must match password!")
})

interface SignupFormProps {
  onSubmit(data: { 
    username: string
    password: string
  }): void
}

interface SignupFormData {
  username: string
  password: string
  confirmPassword: string
}

const SignupForm = (props: SignupFormProps): JSX.Element => {
  const { handleSubmit, control, formState, getError } = useForm<SignupFormData>({
    mode: 'onTouched',
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: ''
    }
  })

  return (
    <div>
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
          <FormInput 
            id="confirmPassword"
            control={control}
            type="password"
            icon="lock"
            iconPosition="left"
            placeholder="Confirm Password"
            fluid
            error={getError('confirmPassword')}
          />
          <Button type="submit" disabled={!formState.isValid}>Sign Up</Button>
        </Segment>
      </Form>
    </div>
  )
}

export default SignupForm