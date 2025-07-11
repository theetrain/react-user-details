import { describe, expect, it, vi } from 'vitest'
import { getData } from './server-utils'
import { stub } from './stub'

describe('getData', () => {
  it('returns cached data if available', async () => {
    const result = await getData(stub)
    expect(result).toEqual(stub)
  })

  it('fetches data from the endpoint if cache is empty', async () => {
    const endpoint = 'https://fake-endpoint.com'
    process.env.DATA_ENDPOINT = endpoint

    const singleStub = stub[0]

    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: { users: [singleStub] } }),
    })

    const result = await getData([])
    expect(fetch).toHaveBeenCalledWith(endpoint)
    expect(result).toEqual([singleStub])
  })

  it('returns stub data in test mode', async () => {
    process.env.APP_ENV = 'test'

    const result = await getData([])
    expect(result).toEqual(stub)
  })
})
