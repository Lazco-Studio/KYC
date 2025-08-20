'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MapPin } from 'lucide-react'

export default function Residency() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function choose(residency: 'TW' | 'OTHER') {
    if (isLoading) return

    setIsLoading(true)

    try {
      await fetch('/api/session/residency', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ residency })
      })
      router.push('/upload')
    } catch (error) {
      console.error('選擇居住地失敗:', error)
      setIsLoading(false)
    }
  }

  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            國籍確認
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            請選擇您的國籍，以便我們提供符合法規的驗證服務。
          </p>
        </header>

        {/* Progress Steps */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">✓</div>
            <div className="w-8 h-1 bg-blue-500"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">2</div>
            <div className="w-8 h-1 bg-blue-500"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">3</div>
          </div>
          <p className="text-center text-sm text-gray-600">步驟 2/3 - 國籍選擇</p>
        </div>

        {/* Main Content Card */}
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">

            {/* Question */}
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                請選擇您的國籍身份
                <br />
                Please select your nationality
              </h2>
            </div>

            {/* Choice Buttons */}
            <div className="space-y-4">
              <button
                onClick={() => choose('TW')}
                disabled={isLoading}
                className="w-full border border-green-700 bg-transparent hover:bg-green-100 text-green-700 font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-200 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
              >
                <span>🇹🇼</span>
                <span>中華民國 (臺灣)</span>
              </button>

              <button
                onClick={() => choose('OTHER')}
                disabled={isLoading}
                className="w-full border border-blue-700 bg-transparent hover:bg-blue-100 text-blue-700 font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-200 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
              >
                <span>🌍</span>
                <span>其他國家 (Other)</span>
              </button>
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="text-center mt-6">
                <div className="inline-block p-3 bg-gray-100 rounded-full">
                  <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                </div>
                <p className="text-gray-500 font-medium mt-2">處理中...</p>
              </div>
            )}

            {/* Info */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="text-xs text-gray-500 text-center">
                <p className="font-medium mb-1">資料保護</p>
                <p>您的國籍資訊將被嚴格保密，僅用於身份驗證。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}