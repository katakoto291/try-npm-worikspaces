import type { GreetResponse } from '@try/shared'

const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:3001'

export const dynamic = 'force-dynamic'

export default async function Page() {
  let message: string
  try {
    const res = await fetch(`${BACKEND_URL}/greet/frontend`, {
      cache: 'no-store',
    })
    if (!res.ok) {
      throw new Error(`backend returned ${res.status}`)
    }
    const data = (await res.json()) as GreetResponse
    message = data.message
  } catch (err) {
    message = `backend unreachable (${(err as Error).message})`
  }

  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1>frontend</h1>
      <p>
        backend says: <strong>{message}</strong>
      </p>
      <p style={{ color: '#888', fontSize: 12 }}>BACKEND_URL: {BACKEND_URL}</p>
    </main>
  )
}
