import { CardList } from '@/src/components/Card/CardList'
import { Pagination } from '@/src/components/Pagination/Pagination'
import { type UserData } from '@/src/utils'

type PageContentProps = {
  data: UserData[]
  dataLength: number
}

export function PageContent({ data, dataLength }: PageContentProps) {
  // State props
  const size = 10
  const page = 1

  // Derived values
  const index = page - 1
  const totalPages = Math.ceil(data.length / size)

  const items: UserData[] = data.slice(size * index, size * (index + 1))

  return (
    <>
      <div className="container row">
        <p>
          Showing {items.length} of {dataLength} items. Page {page} of{' '}
          {totalPages}
        </p>
        <Pagination currentPage={page} totalPages={totalPages} />
      </div>
      <CardList className="container" items={items}></CardList>
    </>
  )
}
