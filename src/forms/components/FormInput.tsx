import { FormInput, FormInputProps  } from 'semantic-ui-react'
import { Control, Controller } from 'react-hook-form'

interface SemFormInputProps extends FormInputProps {
  name?: string
  id: string
  control: Control
  error?: string
}

const SemFormInput = (props: SemFormInputProps): JSX.Element => {
  const { control, id, error, ...rest } = props
  const name = props.name || id

  return (
    <Controller 
      name={name}
      control={control}
      render={({ onChange, onBlur, value }) => {
        return (
          <FormInput
            {...rest}
            id={id}
            name={name} 
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={error}
          />
        )
      }}
    />
  )
}

export default SemFormInput