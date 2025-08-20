import { Suspense } from 'react'
import HomeClient from './HomeClient'
import { Shield, Mail } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Lazco KYC
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            為維護您的權益，我們將對您進行身份驗證。
          </p>
        </header>

        {/* Progress Steps */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">1</div>
            <div className="w-8 h-1 bg-blue-500"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">2</div>
            <div className="w-8 h-1 bg-blue-500"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">3</div>
          </div>
          <p className="text-center text-sm text-gray-600">步驟 1/3 - 獲取驗證連結</p>
        </div>

        {/* Main Content Card */}
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {/* Email Verification Notice */}
            <div className="flex items-start space-x-3 mb-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <Mail className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-blue-800 mb-1">
                  請至商城網站獲取您的身份驗證連結
                </p>
                <p className="text-blue-600">
                  <Link href="https://store.lazco.dev/" className='hover:cursor-pointer hover:underline'>https://store.lazco.dev/</Link>
                </p>
              </div>
            </div>

            {/* ✅ Suspense 包裹 Client Component */}
            <Suspense fallback={
              <div className="text-center space-y-4">
                <div className="inline-block p-3 bg-gray-100 rounded-full">
                  <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                </div>
                <p className="text-gray-500 font-medium">載入中...</p>
              </div>
            }>
              <HomeClient />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  )
}