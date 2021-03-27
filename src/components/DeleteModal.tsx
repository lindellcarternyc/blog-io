import { Modal, Button } from 'semantic-ui-react'

interface DeleteModalProps {
  post: { title: string }
  onConfirm(): void
  onCancel(): void
  open: boolean
}

const DeleteModal = ({ post: { title }, onCancel, onConfirm, open }: DeleteModalProps): JSX.Element => {
  return (
    <Modal
      open={open}
      dimmer="blurring"
    >
      <Modal.Header>Delete '{title}'</Modal.Header>
      <Modal.Content>
        Are you sure you want to delete this post?
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onConfirm} negative>
          Delete
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default DeleteModal