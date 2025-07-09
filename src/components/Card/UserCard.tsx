type UserCardProps = {
  id: string
  name: string
  join_date: string
}

export function UserCard({ id, name, join_date }: UserCardProps) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Joined on: {join_date}</p>
      <button>
        More details <span className="visually-hidden">about {name}</span>
      </button>
    </div>
  )
}
