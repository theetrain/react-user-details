import { CardList } from '@/src/components/Card/CardList'
import { Pagination } from '@/src/components/Pagination/Pagination'
import { type UserData } from '@/src/utils'

type PageContentProps = {
  data: UserData[]
  dataLength: number
  pagination: {
    page: number
    size: number
  }
}

export function PageContent({
  data,
  dataLength,
  pagination: { page, size },
}: PageContentProps) {
  // Derived values
  const totalPages = Math.ceil(dataLength / size)

  return (
    <>
      <div className="container row">
        <p>
          Showing {data.length} of {dataLength} items.{' '}
          <span aria-live="polite" aria-atomic="true">
            Page {page} of {totalPages}
          </span>
        </p>
        <Pagination currentPage={page} totalPages={totalPages} />
      </div>
      <CardList className="container" items={data}></CardList>
    </>
  )
}
