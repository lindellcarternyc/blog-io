import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import FormInput from './components/FormInput'

const schema = yup.object().shape({
  username: yup.string().required().min(5),
  password: yup.string().required().min(5)
})

interface LoginFormProps {
  onSubmit(data: { username: string, password: string }): void
}

const LoginForm = (props: LoginFormProps): JSX.Element => {
  const { handleSubmit, register, errors, formState: { touched, isValid }} = useForm({
    defaultValues: {
      username: '',
      password: ''
    },
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  return (
    <div>
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <FormInput 
          id="username"
          name="username"
          labelText="Username"
          ref={register}
          touched={touched.username}
          error={errors.username?.message}
        />
        <FormInput 
          id="password"
          name="password"
          labelText="Password"
          ref={register}
          touched={touched.password}
          error={errors.password?.message}
          type="password"
        />
        <button disabled={!isValid} type="submit">Log In</button>
      </form>
    </div>
  )
}

export default LoginForm