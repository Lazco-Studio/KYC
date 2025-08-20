'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check, FileText, Shield, AlertCircle, Loader, ArrowRight, Eye } from 'lucide-react'
import Link from 'next/link'

export default function Review() {
  const [residency, setResidency] = useState<'TW' | 'OTHER' | '?'>('?')
  const [sessionId, setSessionId] = useState('')
  const [twId, setTwId] = useState('')
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [uploadedDocs, setUploadedDocs] = useState<any[]>([])
  const router = useRouter()

  // 文件類型名稱對應
  function getDocTypeName(docType: string) {
    const typeNames = {
      'TW_ID_FRONT': '身分證正面',
      'TW_ID_BACK': '身分證反面',
      'TW_SECOND_NHI': '健保卡',
      'TW_SECOND_PASSPORT': '護照',
      'TW_SECOND_DL': '駕照',
      'TW_SECOND_RC': '居留證',
      'OTHER_PASSPORT': '護照'
    }
    return typeNames[docType as keyof typeof typeNames] || docType
  }

  useEffect(() => {
    async function loadData() {
      try {
        // 一次獲取所有 session 資訊和文件記錄
        const sessionResponse = await fetch('/api/session/info')
        const sessionData = await sessionResponse.json()

        if (sessionResponse.ok) {
          setResidency(sessionData.residency)
          setSessionId(sessionData.id)
          setUploadedDocs(sessionData.docs || [])

          // console.log('Session 資訊:', {
          //   id: sessionData.id,
          //   residency: sessionData.residency,
          //   docsCount: sessionData.docsCount
          // })
          // console.log('已上傳的文件:', sessionData.docs)
        } else {
          throw new Error('無法載入 session 資訊')
        }
      } catch (err) {
        console.error('載入資料錯誤:', err)
        setError('無法載入 session 資訊')
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  async function submit() {
    if (!consent) {
      setError('請同意個資蒐集與使用條款')
      return
    }

    if (residency === 'TW' && !twId.trim()) {
      setError('請輸入身分證字號')
      return
    }

    // 簡單的身分證字號格式驗證
    if (residency === 'TW' && twId.trim() && !/^[A-Z][12]\d{8}$/.test(twId.trim())) {
      setError('身分證字號格式不正確')
      return
    }

    // 驗證必要文件是否已上傳
    if (residency === 'TW') {
      const hasIdFront = uploadedDocs.some(doc => doc.type === 'TW_ID_FRONT')
      const hasIdBack = uploadedDocs.some(doc => doc.type === 'TW_ID_BACK')
      const hasSecondDoc = uploadedDocs.some(doc => doc.type.startsWith('TW_SECOND_'))

      if (!hasIdFront) {
        setError('請上傳身分證正面')
        return
      }
      if (!hasIdBack) {
        setError('請上傳身分證反面')
        return
      }
      if (!hasSecondDoc) {
        setError('請上傳第二證件（健保卡、護照、駕照或居留證其中一項）')
        return
      }
    } else if (residency === 'OTHER') {
      const hasPassport = uploadedDocs.some(doc => doc.type === 'OTHER_PASSPORT')
      if (!hasPassport) {
        setError('請上傳護照')
        return
      }
    }

    setIsSubmitting(true)
    setError('')

    try {
      const body: any = {
        sessionId,
        residency,
        docs: uploadedDocs, // 使用從資料庫獲取的文件記錄
        consent
      }
      if (residency === 'TW') body.twIdNumber = twId.trim()

      // console.log('=== 送出審核請求 ===')
      // console.log('請求數據:', body)
      // console.log('已上傳文件數量:', uploadedDocs.length)

      const r = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })

      // console.log('響應狀態:', r.status)
      // console.log('響應頭部:', Object.fromEntries(r.headers.entries()))

      const d = await r.json()
      // console.log('響應數據:', d)

      if (r.ok && d.ok) {
        // console.log('送出成功，跳轉到完成頁面')
        router.push('/done')
      } else {
        console.error('送出失敗:', { status: r.status, response: d })
        throw new Error(d.error || d.message || `HTTP ${r.status} 錯誤`)
      }
    } catch (err: any) {
      console.error('送出過程發生錯誤:', err)
      setError('提交失敗：' + (err.message || '請重試'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const canSubmit = consent && (residency !== 'TW' || twId.trim())

  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <Eye className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            確認並送出
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            請檢查您的資料並確認同意條款，然後送出您的 KYC 申請進行審核。
          </p>
        </header>

        {/* Progress Steps */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">✓</div>
            <div className="w-8 h-1 bg-green-500"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">✓</div>
            <div className="w-8 h-1 bg-green-500"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">✓</div>
          </div>
          <p className="text-center text-sm text-gray-600">最終確認與送出</p>
        </div>

        {/* Main Content Card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">

            {/* Loading State */}
            {isLoading && (
              <div className="text-center py-8">
                <Loader className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600">載入中...</p>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 rounded-xl border border-red-200 flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-red-700">{error}</div>
              </div>
            )}

            {/* Content */}
            {!isLoading && (
              <div className="space-y-6">

                {/* Session Info */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <FileText className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm w-full">
                      <p className="font-medium text-gray-800 mb-1">申請資訊</p>
                      <p className="text-gray-600 text-xs">
                        申請類型: {residency === 'TW' ? '中華民國 (台灣) 居民' : residency === 'OTHER' ? '其他國家居民 (Other)' : '載入中...'}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        申請編號: {sessionId}
                      </p>

                      {/* 顯示已上傳的文件 */}
                      {uploadedDocs.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <p className="font-medium text-gray-700 text-xs mb-2">已上傳文件:</p>
                          <div className="space-y-1">
                            {uploadedDocs.map((doc, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-xs text-gray-600">
                                  {getDocTypeName(doc.type)}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Taiwan ID Input */}
                {residency === 'TW' && (
                  <div className="space-y-3">
                    <label className="block">
                      <span className="text-sm font-medium text-gray-700 mb-2 block">
                        身分證字號 <span className="text-red-500">*</span>
                      </span>
                      <input
                        type="text"
                        value={twId}
                        onChange={e => setTwId(e.target.value.toUpperCase())}
                        placeholder="A123456789"
                        maxLength={10}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 text-center text-lg font-mono tracking-wider"
                      />
                    </label>
                    <p className="text-xs text-gray-500 text-center">
                      請輸入與身分證件相符的字號
                    </p>
                  </div>
                )}

                {/* Consent Checkbox */}
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-medium text-blue-800 mb-1">個資保護聲明</p>
                        <p className="text-blue-600 leading-relaxed">
                          我們將依照個人資料保護法規定，妥善保管您的個人資料，僅用於身份驗證目的，不會外洩給第三方。
                        </p>
                      </div>
                    </div>
                  </div>

                  <label className="flex items-start space-x-3 cursor-pointer group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={e => setConsent(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 border-2 rounded transition-all duration-200 flex items-center justify-center ${consent
                        ? 'bg-blue-600 border-blue-600'
                        : 'border-gray-300 group-hover:border-blue-400'
                        }`}>
                        {consent && <Check className="w-3 h-3 text-white" />}
                      </div>
                    </div>
                    <span className="text-sm text-gray-700 leading-relaxed">
                      我已閱讀並同意 <Link href="https://www.lazco.dev/terms-of-service" target="_blank" className="text-blue-600 hover:underline">服務條款</Link> 以及 <Link href="https://www.lazco.dev/privacy-policy" target="_blank" className="text-blue-600 hover:underline">隱私權政策</Link> <span className="text-red-500">*</span>
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    onClick={submit}
                    disabled={!canSubmit || isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform focus:outline-none focus:ring-4 shadow-lg flex items-center justify-center space-x-2 ${canSubmit && !isSubmitting
                      ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white hover:scale-105 focus:ring-green-200'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin" />
                        <span>送出中...</span>
                      </>
                    ) : (
                      <>
                        <span>送出審核</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                {/* Additional Info */}
                <div className="pt-6 border-t border-gray-100">
                  <div className="text-xs text-gray-500 text-center space-y-1">
                    <p>送出後我們將在 1-3 個工作天內完成審核</p>
                    <p>審核結果將會自動呈現在商城您的客戶資料頁面</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}