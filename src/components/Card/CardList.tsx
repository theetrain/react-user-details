type CardListProps<T> = {
  items: T[]
  Card: React.ComponentType<T>
}

export function CardList<T extends { id: string }>({
  items,
  Card,
}: CardListProps<T>) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Card {...item} />
        </li>
      ))}
    </ul>
  )
}
