'use client'
import { useState } from 'react'

export function UploadDropzone({ sessionId, docType }: { sessionId: string; docType: string }) {
  const [status, setStatus] = useState('')
  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]; if (!file) return
    const mime = file.type, bytes = file.size
    const r = await fetch(`/api/upload-url?sessionId=${sessionId}&docType=${docType}&mime=${encodeURIComponent(mime)}&bytes=${bytes}`)
    const { url, key } = await r.json()
    // PUT 到 MinIO
    const put = await fetch(url, { method: 'PUT', headers: { 'Content-Type': mime }, body: file })
    if (!put.ok) { setStatus('上傳失敗'); return }
    // 回報完成
    const buf = await file.arrayBuffer()
    const sha256 = await crypto.subtle.digest('SHA-256', buf)
    const hex = Array.from(new Uint8Array(sha256)).map(b => b.toString(16).padStart(2, '0')).join('')
    await fetch('/api/upload-complete', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ sessionId, type: docType, objectKey: key, mime, bytes, sha256: hex }) })
    setStatus('已上傳！')
  }
  return (<div><input type="file" onChange={onFile} /><div style={{ color: '#666' }}>{status}</div></div>)
}