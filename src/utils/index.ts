export type UserData = {
  id: string
  username: string
  firstname: string
  lastname: string
  email: string
  avatar: string
  role: string
  join_date: string
  description: string
}

export type SearchParams =
  | {
      page?: string
      size?: string
      totalItems?: string
    }
  | {
      [key: string]: string | undefined
    }
