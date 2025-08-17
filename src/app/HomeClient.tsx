'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { CheckCircle, ArrowRight, Shield, AlertCircle, Loader } from 'lucide-react'

export default function HomeClient() {
  const sp = useSearchParams()
  const router = useRouter()
  const [msg, setMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isVerified, setIsVerified] = useState(false)

  useEffect(() => {
    const token = sp.get('verify_token')
    if (token) {
      setIsLoading(true)
      fetch('/api/token/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
        .then(r => r.json())
        .then(d => {
          setIsLoading(false)
          if (d.ok) {
            setIsVerified(true)
            setMsg('驗證成功，開始進行 KYC')
            setTimeout(() => {
              router.replace('/residency')
            }, 1500)
          } else {
            setMsg('連結無效或已過期')
          }
        })
        .catch(() => {
          setIsLoading(false)
          setMsg('驗證失敗')
        })
    }
  }, [sp, router])

  const handleStartKYC = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.push('/residency')
    }, 800)
  }

  return (
    <div className="space-y-6">
      {/* 載入狀態 */}
      {isLoading && (
        <div className="text-center space-y-4">
          <div className="inline-block p-3 bg-blue-100 rounded-full">
            <Loader className="w-6 h-6 animate-spin text-blue-600" />
          </div>
          <p className="text-blue-600 font-medium">
            {sp.get('verify_token') ? '正在驗證中...' : '正在跳轉...'}
          </p>
        </div>
      )}

      {/* 驗證成功狀態 */}
      {isVerified && !isLoading && (
        <div className="text-center space-y-4">
          <div className="inline-block p-3 bg-green-100 rounded-full">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">驗證成功！</h3>
            <p className="text-green-600 text-sm">即將跳轉至下一步驗證</p>
          </div>
        </div>
      )}

      {/* 開始按鈕 */}
      {!isLoading && !isVerified && (
        <div className="space-y-4">
          <button
            onClick={handleStartKYC}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200 shadow-lg flex items-center justify-center space-x-2 group"
          >
            <span>開始 KYC 驗證</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}

      {/* 狀態訊息 */}
      {msg && !isLoading && (
        <div className={`p-4 rounded-xl text-center text-sm font-medium flex items-center justify-center space-x-2 ${msg.includes('成功')
          ? 'bg-green-50 text-green-700 border border-green-200'
          : msg.includes('失敗') || msg.includes('無效') || msg.includes('過期')
            ? 'bg-red-50 text-red-700 border border-red-200'
            : 'bg-blue-50 text-blue-700 border border-blue-200'
          }`}>
          {msg.includes('成功') && <CheckCircle className="w-4 h-4" />}
          {(msg.includes('失敗') || msg.includes('無效') || msg.includes('過期')) && <AlertCircle className="w-4 h-4" />}
          <span>{msg}</span>
        </div>
      )}

      {/* 安全提示 */}
      {!isLoading && (
        <div className="pt-6 border-t border-gray-100">
          <div className="flex items-start space-x-3">
            <Shield className="w-5 h-5 text-gray-400 my-auto flex-shrink-0" />
            <div className="text-xs text-gray-500">
              <p className="font-medium mb-1">安全保證</p>
              <p>您的個人資訊將受到最高級別的加密保護，我們承諾不會與第三方分享您的資料。</p>
            </div>
          </div>
        </div>
      )}

      {/* 幫助連結 */}
      {!isLoading && (
        <div className="text-center pt-4">
          <p className="text-sm text-gray-500">
            需要幫助？
            <button className="text-blue-600 hover:text-blue-700 ml-1 underline transition-colors hover:cursor-pointer">
              聯繫客服
            </button>
          </p>
        </div>
      )}
    </div>
  )
}