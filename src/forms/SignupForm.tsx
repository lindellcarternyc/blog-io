import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

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

const SignupForm = (props: SignupFormProps): JSX.Element => {
  const { handleSubmit, register, errors, formState: { touched, isValid } } = useForm({
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
        />
        <FormInput 
          id="confirmPassword"
          name="confirmPassword"
          labelText="Confirm Password"
          ref={register}
          touched={touched.confirmPassword}
          error={errors.confirmPassword?.message}
        />
        <button type="submit" disabled={!isValid}>Sign Up</button>
      </form>
    </div>
  )
}

export default SignupForm