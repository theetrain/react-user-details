import styles from './Card.module.css'

type CardProps = React.ComponentProps<'div'>

export function Card({ children, ...rest }: CardProps) {
  return (
    <div {...rest} className={`${styles.card} ${rest.className}`}>
      {children}
    </div>
  )
}
