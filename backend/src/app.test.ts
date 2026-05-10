import { describe, expect, it } from 'vitest'
import { app } from './app'

describe('app', () => {
  it('GET /health returns ok', async () => {
    const res = await app.request('/health')
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ status: 'ok' })
  })

  it('GET /greet/:name returns greeting', async () => {
    const res = await app.request('/greet/world')
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ message: 'Hello, world! san' })
  })
})
