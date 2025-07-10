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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M17.414 16L24 9.414L22.586 8L16 14.586L9.414 8L8 9.414L14.586 16L8 22.586L9.414 24L16 17.414L22.586 24L24 22.586z"
              />
            </svg>{' '}
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
