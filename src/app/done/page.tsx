'use client'
import { useEffect, useState } from 'react'
import { CheckCircle, Clock, Mail, Phone, FileText, ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Done() {
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    // 延遲動畫，讓頁面有載入的感覺
    const timer = setTimeout(() => {
      setIsAnimated(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className={`inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-6 transition-all duration-700 ${isAnimated ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            }`}>
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className={`text-4xl font-bold text-gray-800 mb-4 transition-all duration-700 delay-200 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
            提交成功！
          </h1>
          <p className={`text-base text-gray-600 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
            感謝您完成 KYC 身份驗證流程。我們已收到您的申請，將盡快進行審核。
          </p>
        </header>

        {/* Progress Steps - All Completed */}
        <div className={`max-w-md mx-auto mb-12 transition-all duration-700 delay-400 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">✓</div>
            <div className="w-8 h-1 bg-green-500"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">✓</div>
            <div className="w-8 h-1 bg-green-500"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">✓</div>
          </div>
          <p className="text-center text-sm text-green-600 font-medium">身份驗證流程已完成</p>
        </div>

        {/* Main Content Cards */}
        <div className="max-w-4xl mx-auto space-y-6">

          {/* Status Card */}
          <div className={`bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transition-all duration-700 delay-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">審核中</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                您的資料已成功送出，我們的審核團隊將在 <span className="font-semibold text-green-600">1-3 個工作天</span> 內完成審核。
              </p>

              {/* Status Timeline */}
              {/* <div className="bg-gray-50 rounded-xl p-6 max-w-md mx-auto">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-800">文件已提交</p>
                      <p className="text-sm text-gray-500">剛剛</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-800">審核進行中</p>
                      <p className="text-sm text-gray-500">1-3 個工作天</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-gray-500" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-500">結果通知</p>
                      <p className="text-sm text-gray-500">審核完成後</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Information Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Contact Card */}
            <div className={`bg-white rounded-2xl shadow-xl p-6 border border-gray-100 transition-all duration-700 delay-600 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">需要協助？</h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    如有任何疑問，歡迎聯繫我們的客服團隊。
                  </p>
                  <Link
                    href="https://discord.gg/ZvwTZqXjYf"
                    target="_blank"
                    className="mt-4 inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                  >
                    <span>聯繫客服</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Email Notification Card */}
            <div className={`bg-white rounded-2xl shadow-xl p-6 border border-gray-100 transition-all duration-700 delay-700 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">審核結果通知</h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    審核結果將會自動呈現在商城您的客戶資料頁面
                    <br />
                    您也可以聯絡我們來獲得資訊更新
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className={`bg-blue-50 rounded-2xl p-6 border border-blue-200 transition-all duration-700 delay-800 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
            <div className="flex items-start space-x-4">
              <FileText className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">重要提醒</h3>
                <div className="text-sm text-blue-700 space-y-2">
                  <p>• 請保持您提供的聯絡資訊暢通，以便我們在需要時與您聯繫</p>
                  <p>• 如果審核過程中需要補充資料，我們會主動通知您</p>
                  <p>• 審核完成前，請勿重複提交申請</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className={`text-center pt-8 transition-all duration-700 delay-900 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
            <Link
              href="https://store.lazco.com/"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>返回 Lazco 商城</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}