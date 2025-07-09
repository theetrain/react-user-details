import styles from './Card.module.css'
import { UserCard } from './UserCard'
import { UserData } from '@/src/utils'

type CardListProps = {
  items: UserData[]
} & React.ComponentProps<'div'>

export function CardList({ items, ...rest }: CardListProps) {
  return (
    <div {...rest}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id}>
            <UserCard item={item} className={styles.gridCard} />
          </li>
        ))}
      </ul>
    </div>
  )
}
