'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Review() {
  const [residency, setResidency] = useState<'TW' | 'OTHER' | '?'>('?')
  const [sessionId, setSessionId] = useState('')
  const [twId, setTwId] = useState('')
  const [consent, setConsent] = useState(false)
  const router = useRouter()

  useEffect(() => { fetch('/api/session/info').then(r => r.json()).then(d => { setResidency(d.residency); setSessionId(d.id) }) }, [])

  async function submit() {
    const body: any = { sessionId, residency, docs: [], consent }
    if (residency === 'TW') body.twIdNumber = twId
    const r = await fetch('/api/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    const d = await r.json()
    if (d.ok) router.push('/done')
    else alert('提交失敗：' + (d.error || ''))
  }

  return (
    <main>
      <h1>確認並送出</h1>
      {residency === 'TW' && (
        <label>身分證字號：<input value={twId} onChange={e => setTwId(e.target.value)} placeholder="A123456789" /></label>
      )}
      <div style={{ margin: '12px 0' }}>
        <label><input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} /> 我同意蒐集與使用個資</label>
      </div>
      <button onClick={submit}>送出審核</button>
    </main>
  )
}