'use client'

import { useEffect, useRef } from "react";
import '../project-card/project-card.css'
import '../modal/modal.css'
import {lockScroll, unlockScroll} from "@/app/components/projects/libs/lock-scroll";

type Props = {
  id: number
  trigger: React.ReactNode
  children: React.ReactNode
}

const ProjectList: React.FC<Props> = ({ id, trigger, children }) => {
  const modalRef = useRef(new Map<number, HTMLDialogElement | null>())

  useEffect(() => {
    modalRef.current.get(id)?.addEventListener('close',
        () => unlockScroll())

  }, [id]);

  const handleOpen = (id: number) => {
    modalRef.current.get(id)?.showModal()
    lockScroll()
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
          { trigger }
        </button>
        <dialog ref={(ref) =>  handleDialogRef(id, ref) }
                // @ts-expect-error no error
                closedby={"any"}
                className="modal"
        >
          { children }
          <button onClick={() => handleClose(id)} className="modal-content__close-button">Close</button>
        </dialog>
      </>
  )
}

export default ProjectList