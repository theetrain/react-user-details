'use client'

import { CardList } from '@/src/components/Card/CardList'
import { Pagination } from '@/src/components/Pagination/Pagination'
import { useState } from 'react'
import { UserData } from './page'
import { UserCard } from '@/src/components/Card/UserCard'

type BriefUserData = {
  id: string
  name: string
  avatar: string
  join_date: string
}

type PageContentProps = {
  data: UserData[]
  dataLength: number
}

export function PageContent({ data, dataLength }: PageContentProps) {
  // State props
  const [size, setSize] = useState(10)
  const [page, setPage] = useState(1)

  // Derived values
  const index = page - 1
  const totalPages = Math.ceil(data.length / size)

  const items: BriefUserData[] = data
    .slice(size * index, size * (index + 1))
    .map((user) => ({
      id: user.id,
      name: `${user.firstname} ${user.lastname}`,
      avatar: user.avatar,
      join_date: user.join_date,
    }))

  return (
    <>
      <div className="container row">
        <p>
          Showing {items.length} of {dataLength} items. Page {page} of{' '}
          {totalPages}
        </p>
        <Pagination currentPage={page} totalPages={totalPages} />
      </div>
      <CardList className="container" items={items} Card={UserCard}></CardList>
    </>
  )
}
