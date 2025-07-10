'use client'

import { Link } from '../Link/Link'
import { useState } from 'react'
import styles from './Pagination.module.css'

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange?: (page: number) => void
} & React.ComponentProps<'nav'>

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  ...navAttributes
}: PaginationProps) {
  const prevDisabled = currentPage <= 1
  const nextDisabled = currentPage >= totalPages
  const [loading, setLoading] = useState(false)

  return (
    <nav
      className={`${styles.nav} row`}
      aria-label="Directory pagination"
      {...navAttributes}
    >
      {onPageChange ? (
        <>
          <button
            aria-disabled={prevDisabled}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous <span className="visually-hidden">page</span>
          </button>
          <button
            aria-disabled={nextDisabled}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Next <span className="visually-hidden">page</span>
          </button>
        </>
      ) : (
        <>
          <Link
            href={`?page=${currentPage - 1}`}
            aria-disabled={prevDisabled}
            tabIndex={prevDisabled ? -1 : undefined}
            beforeNavigate={() => setLoading(true)}
            afterNavigate={() => setLoading(false)}
          >
            Previous <span className="visually-hidden">page</span>
          </Link>
          <Link
            href={`?page=${currentPage + 1}`}
            aria-disabled={nextDisabled}
            tabIndex={nextDisabled ? -1 : undefined}
            beforeNavigate={() => setLoading(true)}
            afterNavigate={() => setLoading(false)}
          >
            Next <span className="visually-hidden">page</span>
          </Link>
          <span aria-live="polite">{loading ? 'Loading...' : ''}</span>
        </>
      )}
    </nav>
  )
}
