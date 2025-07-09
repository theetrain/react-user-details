import { Card } from './Card'
import styles from './Card.module.css'

type UserCardProps = {
  id: string
  name: string
  avatar?: string
  join_date: string
} & React.ComponentProps<typeof Card>

export function UserCard({
  id,
  name,
  join_date,
  avatar,
  ...rest
}: UserCardProps) {
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
      <button>
        More details <span className="visually-hidden">about {name}</span>
      </button>
    </Card>
  )
}
