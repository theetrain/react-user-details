import { Metadata } from 'next'
import { SearchParams, type UserData } from '@/src/utils'
import { Pagination } from '@/src/components/Pagination/Pagination'
import { CardList } from '@/src/components/Card/CardList'
import { getData } from '@/src/utils/server-utils'

export const metadata: Metadata = {
  title: 'User Directory',
  description: 'A simple user directory application built with Next.js',
}

/** All remote data is cached throughout the life of the server. */
let cache: UserData[] = []

type PageProps = {
  searchParams: Promise<SearchParams>
}

export default async function Home({ searchParams }: PageProps) {
  cache = await getData(cache)

  const params = await searchParams
  let page = params.page ? parseInt(params.page, 10) : 1
  let size = params.size ? parseInt(params.size, 10) : 10

  if (page < 1) page = 1
  if (size < 1) size = 10

  const data = cache.slice(size * (page - 1), size * page)
  const dataLength = cache.length
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
