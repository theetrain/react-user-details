import { Metadata } from 'next'
import { SearchParams, type UserData } from '@/src/utils'
import { stub } from '@/src/utils/stub'
import { Pagination } from '@/src/components/Pagination/Pagination'
import { CardList } from '@/src/components/Card/CardList'

export const metadata: Metadata = {
  title: 'User Directory',
  description: 'A simple user directory application built with Next.js',
}

const endpoint = process.env.DATA_ENDPOINT

/** All remote data is cached throughout the life of the server. */
let allData: UserData[] = []

async function getData() {
  if (allData.length > 0) {
    return allData
  }

  if (!endpoint) {
    console.error('DATA_ENDPOINT is not defined in the environment variables.')
    return stub
  } else {
    const response = await fetch(endpoint)
    if (!response.ok) {
      console.error(
        `Failed to fetch data from ${endpoint}: ${response.statusText}`
      )
    }

    return (await response.json()).data.users as UserData[]
  }
}

type PageProps = {
  searchParams: Promise<SearchParams>
}

export default async function Home({ searchParams }: PageProps) {
  allData = await getData()

  const params = await searchParams
  let page = params.page ? parseInt(params.page, 10) : 1
  let size = params.size ? parseInt(params.size, 10) : 10

  if (page < 1) page = 1
  if (size < 1) size = 10

  const data = allData.slice(size * (page - 1), size * page)
  const dataLength = allData.length
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
