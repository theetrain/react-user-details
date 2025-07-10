import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { UserCard } from './UserCard'
import { singleItemStub } from '@/src/utils/stub'

describe('UserCard', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render brief details', () => {
    const component = render(<UserCard item={singleItemStub} />)

    expect(component.getByRole('heading', { level: 2 })).toHaveTextContent(
      `${singleItemStub.firstname} ${singleItemStub.lastname}`
    )
    expect(component.getByText('Join date:')).toHaveTextContent(
      `Join date: ${singleItemStub.join_date}`
    )
  })

  it('should open dialog when details button is interacted', async () => {
    const user = userEvent.setup()
    HTMLDialogElement.prototype.showModal = vi.fn()
    const dialogSpy = vi.spyOn(HTMLDialogElement.prototype, 'showModal')

    const component = render(<UserCard item={singleItemStub} />)
    const dialogButton = component.getByRole('button', {
      name: /More details about/i,
    })

    await user.tab()
    expect(dialogButton).toHaveFocus()

    await user.keyboard('{Enter}')

    // jsdom doesn't support `getByRole('dialog')`
    const dialog = component.container.querySelector('dialog')
    expect(dialog).toBeInTheDocument()
    expect(dialogSpy).toHaveBeenCalled()
  })

  describe('dialog', () => {
    it('should render more details', () => {
      const component = render(<UserCard item={singleItemStub} />)

      // `<dl>` does not have an implicit role, so we select it via test ID
      const descriptionList = component.getByTestId('description-list')

      const terms = descriptionList.querySelectorAll('dt')
      const descriptions = descriptionList.querySelectorAll('dd')
      // })

      const testContent: { [key: string]: string } = {
        Username: singleItemStub.username,
        'Join date': singleItemStub.join_date,
        Role: singleItemStub.role,
        Email: singleItemStub.email,
        Description: singleItemStub.description,
      }

      for (let i = 0; i < terms.length; i++) {
        const term = terms[i].textContent?.trim() ?? ''
        const description = descriptions[i].textContent?.trim() ?? ''

        expect(description).toBe(testContent[term])
      }
    })
  })
})
