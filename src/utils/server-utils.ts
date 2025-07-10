'use server'

import { type UserData } from '.'
import { stub } from './stub'

export async function getData(cache: UserData[]) {
  if (cache.length > 0) {
    return cache
  }

  const endpoint = process.env.DATA_ENDPOINT

  if (process.env.NODE_ENV === 'test') {
    console.warn('Test environment. Using stub data.')
    return stub
  } else if (!endpoint) {
    console.error('DATA_ENDPOINT is not defined in the environment variables.')
    return []
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
