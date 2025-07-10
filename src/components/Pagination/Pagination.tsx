import Link from 'next/link'
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
            Previous
          </button>
          <button
            aria-disabled={nextDisabled}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Next
          </button>
        </>
      ) : (
        <>
          <Link
            href={`?page=${currentPage - 1}`}
            aria-disabled={prevDisabled}
            tabIndex={prevDisabled ? -1 : undefined}
          >
            Previous
          </Link>
          <Link
            href={`?page=${currentPage + 1}`}
            aria-disabled={nextDisabled}
            tabIndex={nextDisabled ? -1 : undefined}
          >
            Next
          </Link>
        </>
      )}
    </nav>
  )
}
