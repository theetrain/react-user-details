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
    <nav aria-label="Directory pagination" {...navAttributes}>
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
          <a href={`?page=${currentPage - 1}`} aria-disabled={prevDisabled}>
            Previous
          </a>
          <a href={`?page=${currentPage + 1}`} aria-disabled={nextDisabled}>
            Next
          </a>
        </>
      )}
    </nav>
  )
}
