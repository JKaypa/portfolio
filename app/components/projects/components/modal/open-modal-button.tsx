'use client'

type Props = {
  children: React.ReactElement,
  id: number,
  className: string
}

const OpenModalButton: React.FC<Props> = ({ children, id, className }) => {

  const handleOpenModal = () => {
    const event = new CustomEvent<number>('open-dialog-modal', { detail: id })
    document.body.dispatchEvent(event)
  }

  return (
      <button onClick={handleOpenModal} className={className}>
        {children}
      </button>
  )
}

export default OpenModalButton