import React from "react"

interface FormInputProps {
  labelText: string
  id: string
  name: string
  touched?: boolean
  error?: string
  type?: 'text' | 'password' | 'email' | 'number'
}

const FormInput = React.forwardRef((props: FormInputProps, ref: React.Ref<HTMLInputElement>) => {
  const { labelText, id, name, touched, error, type} = props
  return (
    <div>
      <label htmlFor={id}>{labelText}: </label>
      <input id={id} name={name} ref={ref} type={type}/>
      {touched && error && <p>{error}</p>}
    </div>
  )
})

export default FormInput