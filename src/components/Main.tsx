import { Container } from 'semantic-ui-react'

interface MainProps {
  children: JSX.Element | JSX.Element[]
}

const Main = (props: MainProps): JSX.Element => {
  return (
    <Container style={{ paddingTop: '5rem' }}>
      {props.children}
    </Container>
  )
}

export default Main