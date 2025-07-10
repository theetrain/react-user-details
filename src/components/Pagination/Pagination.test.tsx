import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Pagination } from './Pagination'

describe('Pagination', () => {
  afterEach(() => {
    cleanup()
  })

  it('displays page nav links', () => {
    // Mock Link component
    vi.mock('../Link/Link', () => ({
      Link: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    }))

    const component = render(<Pagination currentPage={1} totalPages={10} />)
    const prevLink = component.getByRole('link', { name: 'Previous page' })
    const nextLink = component.getByRole('link', { name: 'Next page' })

    expect(prevLink).toBeInTheDocument()
    expect(nextLink).toBeInTheDocument()
  })

  it('disables links on first page', () => {
    const component = render(<Pagination currentPage={1} totalPages={5} />)
    const prevLink = component.getByRole('link', { name: 'Previous page' })
    const nextLink = component.getByRole('link', { name: 'Next page' })

    expect(prevLink).toHaveAttribute('aria-disabled', 'true')
    expect(nextLink).toHaveAttribute('href', '?page=2')
  })

  it('disables links on last page', () => {
    const component = render(<Pagination currentPage={5} totalPages={5} />)
    const prevLink = component.getByRole('link', { name: 'Previous page' })
    const nextLink = component.getByRole('link', { name: 'Next page' })

    expect(nextLink).toHaveAttribute('aria-disabled', 'true')
    expect(prevLink).toHaveAttribute('href', '?page=4')
  })
})
