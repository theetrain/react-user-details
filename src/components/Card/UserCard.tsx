'use client'

import { useRef } from 'react'
import { Card } from './Card'
import styles from './Card.module.css'
import { UserData } from '@/src/utils'
import { Dialog, DialogHandle } from '../Dialog/Dialog'

type UserCardProps = {
  item: UserData
} & React.ComponentProps<typeof Card>

export function UserCard({
  item: {
    id,
    firstname,
    lastname,
    avatar,
    username,
    join_date,
    email,
    role,
    description,
  },
  ...rest
}: UserCardProps) {
  const name = `${firstname} ${lastname}`.trim()
  const dialogRef = useRef<DialogHandle>(null)

  return (
    <Card {...rest} className={`${rest.className} ${styles.userCard}`} id={id}>
      <div className={`mb-3 col`}>
        <div className={`row ${styles.avatarRow}`}>
          <h2>{name}</h2>
          {avatar && (
            <img
              className={`align-end e-avatar`}
              src={avatar}
              alt={`Profile of ${name}`}
            />
          )}
        </div>
        <p>Joined: {join_date}</p>
      </div>
      <button
        className="e-button"
        type="button"
        onClick={() => dialogRef.current?.openDialog()}
      >
        More details <span className="visually-hidden">about {name}</span>
      </button>
      <Dialog ref={dialogRef}>
        <h2>{name}</h2>
        {avatar && (
          <img
            className={`align-end e-avatar ${styles.fullAvatar}`}
            src={avatar}
            alt={`Profile of ${name}`}
          />
        )}
        <dl>
          <dt>Username</dt>
          <dd>{username}</dd>
          <dt>Role</dt>
          <dd>{role}</dd>
          <dt>Email</dt>
          <dd>{email}</dd>
          <dt>Description</dt>
          <dd>{description}</dd>
        </dl>
      </Dialog>
    </Card>
  )
}
