import { getSession } from '@/lib/session'
import { UploadDropzone } from '@/components/UploadDropzone'

export default async function UploadPage() {
  const session = await getSession()
  if (!session) return <main><h1>未找到驗證 Session</h1></main>
  const need = session.residency === 'TW' ? ['TW_ID_FRONT', 'TW_ID_BACK', 'TW_SECOND_*'] : ['OTHER_PASSPORT']
  return (
    <main>
      <h1>上傳文件</h1>
      <p>需求：{need.join(', ')}</p>
      {session.residency === 'TW' ? (
        <>
          <h3>身分證（正面）</h3><UploadDropzone sessionId={session.id} docType="TW_ID_FRONT" />
          <h3>身分證（反面）</h3><UploadDropzone sessionId={session.id} docType="TW_ID_BACK" />
          <h3>第二證件（擇一）</h3>
          <UploadDropzone sessionId={session.id} docType="TW_SECOND_NHI" />
          <UploadDropzone sessionId={session.id} docType="TW_SECOND_PASSPORT" />
          <UploadDropzone sessionId={session.id} docType="TW_SECOND_DL" />
          <UploadDropzone sessionId={session.id} docType="TW_SECOND_RC" />
        </>
      ) : (
        <>
          <h3>護照</h3><UploadDropzone sessionId={session.id} docType="OTHER_PASSPORT" />
        </>
      )}
      <a href="/review" style={{ display: 'inline-block', marginTop: 16 }}>下一步 → 檢視與送出</a>
    </main>
  )
}