'use client'

import './modal.css'

type Props = {
  id: number
}

const CloseModalButton: React.FC<Props> = ({ id }) => {
  const onCloseModal = () => {
    const event = new CustomEvent('close-dialog-modal', { detail: id })
    document.body.dispatchEvent(event)
  }

  return (
      <button onClick={onCloseModal} className="modal-content__close-button">
        Close
      </button>
  )
}

export default CloseModalButton