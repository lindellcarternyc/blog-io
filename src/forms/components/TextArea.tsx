import { TextAreaProps as STextAreaProps, TextArea as STextArea } from 'semantic-ui-react' 
import { Control, Controller } from 'react-hook-form'

interface TextAreaProps extends STextAreaProps {
  name?: string
  id: string
  control: Control
  error?: string
}

const TextArea = (props: TextAreaProps): JSX.Element => {
  const { control, id, error, ...rest } = props
  const name = rest.name || id

  return (
    <Controller
      name={name}
      control={control}
      render={(fProps) => {
        return (
          <STextArea {...fProps} id={id} name={name}/>
        )
      }}
    />
  )
}

export default TextArea