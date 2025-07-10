'use server'

import { type UserData } from '.'
import { stub } from './stub'

export async function getData(cache: UserData[]) {
  if (cache.length > 0) {
    return cache
  }

  const endpoint = process.env.DATA_ENDPOINT

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
