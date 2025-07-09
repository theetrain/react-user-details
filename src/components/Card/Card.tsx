import styles from './Card.module.scss'

type CardProps = React.ComponentProps<'div'>

export function Card({ children }: CardProps) {
  return <div className={styles.card}>{children}</div>
}
