'use client'

import React, { useCallback, useEffect, useRef } from "react";
import './modal.css'

type CloseModal = {
  onCloseModal: () => void
}

type Props = {
  id: number,
  children: React.ReactElement<CloseModal>
}

const Modal: React.FC<Props> = ({ id, children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const openModal = useCallback((event: CustomEvent<number>) => {
    if(event.detail === id) {
      dialogRef.current?.showModal()
      document.body.style.overflow = 'hidden'
    }

  }, [id])

  useEffect(() => {
    document.body.addEventListener('open-dialog-modal', openModal as EventListener)
    dialogRef.current?.addEventListener('close', () => document.body.style.overflow = 'auto')

    return () =>
      document.body.removeEventListener('open-dialog-modal', openModal as EventListener)

  }, [openModal])


  const handleCloseModal = () => {
      dialogRef.current?.close()
  }


  return(
      // @ts-expect-error closedBy is a valid prop
  <dialog ref={dialogRef} closedby="any" className="modal">
    { React.cloneElement<CloseModal>(children, { onCloseModal: handleCloseModal }) }
  </dialog>)
}

export default Modal