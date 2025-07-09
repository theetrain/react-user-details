import { useId } from 'react'
import { Card } from './Card'
import styles from './Card.module.css'
import { UserData } from '@/src/utils'

type UserCardProps = {
  item: UserData
} & React.ComponentProps<typeof Card>

export function UserCard({
  item: { id, firstname, lastname, join_date, avatar },
  ...rest
}: UserCardProps) {
  const popoverId = useId()
  const name = `${firstname} ${lastname}`.trim()

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
      <button className="e-button" type="button" popoverTarget={popoverId}>
        More details <span className="visually-hidden">about {name}</span>
      </button>
      <div popover="auto" id={popoverId} className={styles.popover}>
        <h2>{name}</h2>
        {avatar && (
          <img
            className={`align-end e-avatar ${styles.fullAvatar}`}
            src={avatar}
            alt={`Profile of ${name}`}
          />
        )}
        <p>Joined: {join_date}</p>
        <p></p>
      </div>
    </Card>
  )
}
