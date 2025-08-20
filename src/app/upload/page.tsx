import { getSession } from '@/lib/session'
import { UploadDropzone } from '@/components/UploadDropzone'
import { FileText, Upload, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default async function UploadPage() {
  const session = await getSession()

  if (!session) {
    return (
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <FileText className="w-8 h-8 text-red-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-4">未找到驗證 Session</h1>
              <p className="text-gray-600 mb-6">請重新開始身份驗證流程</p>
              <Link
                href="/"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200 shadow-lg"
              >
                <span>返回首頁</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    )
  }

  const need = session.residency === 'TW' ? ['中華民國身份證-正面', '中華民國身份證-反面', '中華民國核發之第二證件'] : ['護照 (Passport)']
  const isTaiwan = session.residency === 'TW'

  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <Upload className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            文件上傳
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {isTaiwan
              ? '請上傳您的身分證明文件，確保照片清晰且完整可見。'
              : '請上傳您的護照，確保照片清晰且個人資訊完整可見。'
            }
          </p>
        </header>

        {/* Progress Steps */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">✓</div>
            <div className="w-8 h-1 bg-green-500"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">✓</div>
            <div className="w-8 h-1 bg-blue-500"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">3</div>
          </div>
          <p className="text-center text-sm text-gray-600">步驟 3/3 - 文件上傳</p>
        </div>

        {/* Main Content Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">

            {/* Requirements Info */}
            <div className="bg-blue-50 rounded-xl p-4 mb-8 border border-blue-200">
              <div className="flex items-start space-x-3">
                <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-blue-800 mb-1">上傳要求</p>
                  <p className="text-blue-600">
                    需要文件：{need.join(', ')}
                  </p>
                </div>
              </div>
            </div>

            {/* Upload Sections */}
            <div className="space-y-8">
              {isTaiwan ? (
                <>
                  {/* 台灣身分證 */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                        <span>🆔</span>
                        <span>身分證（正面）</span>
                      </h3>
                      <UploadDropzone sessionId={session.id} docType="TW_ID_FRONT" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                        <span>🆔</span>
                        <span>身分證（反面）</span>
                      </h3>
                      <UploadDropzone sessionId={session.id} docType="TW_ID_BACK" />
                    </div>
                  </div>

                  {/* 第二證件 */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                      <span>📄</span>
                      <span>第二證件（請選擇其中一項上傳）</span>
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">健保卡</h4>
                        <UploadDropzone sessionId={session.id} docType="TW_SECOND_NHI" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">護照</h4>
                        <UploadDropzone sessionId={session.id} docType="TW_SECOND_PASSPORT" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">駕照</h4>
                        <UploadDropzone sessionId={session.id} docType="TW_SECOND_DL" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">居留證</h4>
                        <UploadDropzone sessionId={session.id} docType="TW_SECOND_RC" />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* 護照 */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                      <span>🛂</span>
                      <span>護照</span>
                    </h3>
                    <UploadDropzone sessionId={session.id} docType="OTHER_PASSPORT" />
                  </div>
                </>
              )}
            </div>

            {/* Upload Tips */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-medium text-gray-800 mb-2">📋 上傳小提示</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 請確保文件照片清晰，文字完整可讀</li>
                  <li>• 建議上傳 JPG、PNG 格式，檔案大小不超過 10MB</li>
                  <li>• 避免反光、模糊或傾斜的照片</li>
                  <li>• 確保個人資訊完整顯示在照片中</li>
                </ul>
              </div>
            </div>

            {/* Next Step Button */}
            <div className="mt-8 text-center">
              <Link
                href="/review"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200 shadow-lg group"
              >
                <span>下一步 - 檢視與送出</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}