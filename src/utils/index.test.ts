import { describe, expectTypeOf, it } from 'vitest'
import type { SearchParams, UserData } from './index'

describe('UserData', () => {
  it('maintains the structure of UserData', () => {
    const user: UserData = {
      id: '1',
      username: 'johndoe',
      firstname: 'John',
      lastname: 'Doe',
      email: 'email',
      avatar: 'someAvatarUrl',
      role: 'user',
      join_date: '2023-01-01',
      description: 'A sample user',
    }

    expectTypeOf(user).toEqualTypeOf<{
      id: string
      username: string
      firstname: string
      lastname: string
      email: string
      avatar: string
      role: string
      join_date: string
      description: string
    }>
  })
})

describe('SearchParams', () => {
  it('maintains the structure of SearchParams', () => {
    const params: SearchParams = {
      page: '1',
      size: '10',
      totalItems: '100',
    }

    expectTypeOf(params).toEqualTypeOf<
      | {
          page?: string
          size?: string
          totalItems?: string
        }
      | { [key: string]: string | undefined }
    >()
  })
})
