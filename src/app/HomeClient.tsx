'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function HomeClient() {
  const sp = useSearchParams()
  const router = useRouter()
  const [msg, setMsg] = useState('')

  useEffect(() => {
    const token = sp.get('verify_token')
    if (token) {
      fetch('/api/token/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
        .then(r => r.json())
        .then(d => {
          if (d.ok) {
            setMsg('驗證成功，開始進行 KYC')
            router.replace('/residency')
          } else {
            setMsg('連結無效或已過期')
          }
        })
        .catch(() => setMsg('驗證失敗'))
    }
  }, [sp, router])

  return (
    <div>
      <button onClick={() => router.push('/residency')}>開始</button>
      <p style={{ color: '#666', marginTop: 16 }}>{msg}</p>
    </div>
  )
}
