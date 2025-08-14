'use client'
import { useRouter } from 'next/navigation'

export default function Residency() {
  const router = useRouter()
  async function choose(residency: 'TW' | 'OTHER') {
    await fetch('/api/session/residency', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ residency }) })
    router.push('/upload')
  }
  return (
    <main>
      <h1>請選擇您是否為中華民國 (臺灣) 居民</h1>
      <div style={{ display: 'flex', gap: 12 }}>
        <button onClick={() => choose('TW')}>是，臺灣居民</button>
        <button onClick={() => choose('OTHER')}>否，其他國家</button>
      </div>
    </main>
  )
}