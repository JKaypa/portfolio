'use client'

import {useEffect, useRef} from "react";
import '../project-card/project-card.css'
import '../modal/modal.css'

type Props = {
  id: number
  openButtonContent: React.ReactNode
  children: React.ReactNode
}

const ProjectList: React.FC<Props> = ({ id, openButtonContent, children }) => {
  const modalRef = useRef(new Map<number, HTMLDialogElement | null>())

  useEffect(() => {
    modalRef.current.get(id)?.addEventListener('close',
        () => document.body.style.overflow = 'auto')

  }, [id]);

  const handleOpen = (id: number) => {
    modalRef.current.get(id)?.showModal()
    document.body.style.overflow = 'hidden'
  }
  const handleClose = (id: number) => {
    modalRef.current.get(id)?.close()
  }

  const handleDialogRef = (id: number, ref:  HTMLDialogElement | null) => {
    modalRef.current.set(id, ref)
  }

  return (
      <>
        <button onClick={() => handleOpen(id)} className="project-modal__open-button">
          { openButtonContent }
        </button>
        <dialog ref={(ref) =>  handleDialogRef(id, ref) }
                // @ts-expect-error no error
                closedby={"any"}
                className="modal"
        >
          <button onClick={() => handleClose(id)} className="modal-content__close-button">Close</button>
          { children }
        </dialog>
      </>
  )
}

export default ProjectList