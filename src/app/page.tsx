import { Suspense } from 'react'
import HomeClient from './HomeClient'

export default function HomePage() {
  return (
    <main>
      <h1>歡迎使用 KYC</h1>
      <p>若您尚未驗證連結，請至電子郵件點擊專屬連結。</p>
      {/* ✅ Suspense 包裹 Client Component */}
      <Suspense fallback={<p>載入中...</p>}>
        <HomeClient />
      </Suspense>
    </main>
  )
}
