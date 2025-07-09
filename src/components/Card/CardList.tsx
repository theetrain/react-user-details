import styles from './Card.module.css'
import { type Card } from './Card'

type CardListProps<T> = {
  items: T[]
  Card: React.ComponentType<T>
} & React.ComponentProps<'div'>

type DefaultCardProps = { id: string } & React.ComponentProps<typeof Card>

export function CardList<T extends DefaultCardProps>({
  items,
  Card,
  ...rest
}: CardListProps<T>) {
  return (
    <div {...rest}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id}>
            <Card {...item} className={styles.gridCard} />
          </li>
        ))}
      </ul>
    </div>
  )
}
