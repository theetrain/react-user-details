'use client'

import { useRef, forwardRef, useImperativeHandle } from 'react'
import styles from './Dialog.module.css'

type DialogProps = {
  closeLabel?: string | React.ReactNode
  children: React.ReactNode
}

export type DialogHandle = {
  openDialog: () => void
  closeDialog: () => void
}

const Dialog = forwardRef<DialogHandle, DialogProps>(
  ({ closeLabel, children }, ref) => {
    const dialog = useRef<HTMLDialogElement>(null)

    function openDialog() {
      if (dialog.current) {
        dialog.current.showModal()
        document.documentElement.classList.add('noscroll')
      }
    }

    function closeDialog() {
      if (dialog.current) {
        dialog.current.close()
        document.documentElement.classList.remove('noscroll')
      }
    }

    useImperativeHandle(ref, () => ({ openDialog, closeDialog }))

    return (
      <dialog ref={dialog} className={styles.dialog} onClose={closeDialog}>
        <div>
          <button
            type="button"
            className={`${styles.dialogClose} row`}
            onClick={closeDialog}
          >
            {closeLabel || 'Close'}
          </button>
          {children}
        </div>
      </dialog>
    )
  }
)

Dialog.displayName = 'Dialog'

export { Dialog }
