'use client'
import { useState, useRef } from 'react'
import { Upload, FileText, Check, AlertCircle, Loader } from 'lucide-react'

export function UploadDropzone({ sessionId, docType }: { sessionId: string; docType: string }) {
  const [status, setStatus] = useState('')
  const [isDragOver, setIsDragOver] = useState(false)
  const [fileName, setFileName] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // 通用文件處理函數
  async function handleFile(file: File) {
    setFileName(file.name)
    setIsUploading(true)
    setStatus('正在上傳...')
    setUploadProgress(0)
    
    try {
      // 創建 FormData
      const formData = new FormData()
      formData.append('file', file)
      formData.append('sessionId', sessionId)
      formData.append('docType', docType)

      // 發送到後端 API
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setStatus('已上傳！')
        setUploadProgress(100)
      } else {
        throw new Error(result.error || '上傳失敗')
      }
      
    } catch (error) {
      console.error('上傳過程出錯:', error)
      setStatus('上傳失敗')
      setUploadProgress(0)
    } finally {
      setIsUploading(false)
    }
  }

  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    
    // 簡單的前端驗證
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf']
    if (!allowedTypes.includes(file.type)) {
      setStatus('檔案格式不支援')
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      setStatus('檔案大小不能超過 10MB')
      return
    }

    await handleFile(file)
  }

  // 拖拽處理
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      // 直接調用 handleFile，不需要模擬事件
      await handleFile(files[0])
    }
  }

  const handleClick = () => {
    if (!isUploading && status !== '已上傳！') {
      fileInputRef.current?.click()
    }
  }

  const handleReset = () => {
    setStatus('')
    setFileName('')
    setUploadProgress(0)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const getStatusColor = () => {
    if (status === '已上傳！') return 'border-green-300 bg-green-50'
    if (status.includes('失敗') || status.includes('不支援') || status.includes('超過')) return 'border-red-300 bg-red-50'
    if (isUploading) return 'border-blue-300 bg-blue-50'
    return isDragOver ? 'border-blue-400 bg-blue-50' : 'border-gray-300 bg-gray-50'
  }

  const getStatusIcon = () => {
    if (status === '已上傳！') return <Check className="w-8 h-8 text-green-600" />
    if (status.includes('失敗') || status.includes('不支援') || status.includes('超過')) return <AlertCircle className="w-8 h-8 text-red-600" />
    if (isUploading) return <Loader className="w-8 h-8 text-blue-600 animate-spin" />
    return <Upload className="w-8 h-8 text-gray-400" />
  }

  const getStatusText = () => {
    if (status === '已上傳！') return '上傳成功'
    if (status.includes('失敗') || status.includes('不支援') || status.includes('超過')) return status
    if (isUploading) return '上傳中...'
    return isDragOver ? '放開以上傳檔案' : '點擊或拖拽檔案到此處'
  }

  return (
    <div className="w-full">
      <div
        className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all duration-200 cursor-pointer ${getStatusColor()} ${
          status === '已上傳！' ? 'cursor-default' : 'hover:border-blue-400 hover:bg-blue-50'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          onChange={onFile}
          className="hidden"
          accept="image/*,application/pdf"
        />

        <div className="flex flex-col items-center space-y-3">
          {/* Status Icon */}
          <div className="flex items-center justify-center">
            {getStatusIcon()}
          </div>

          {/* File Info or Upload Text */}
          {fileName ? (
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <FileText className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-800 truncate max-w-xs">
                  {fileName}
                </span>
              </div>
              {/* Progress Bar */}
              {isUploading && (
                <div className="w-full max-w-xs mx-auto">
                  <div className="bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{uploadProgress}%</p>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-700">
                {getStatusText()}
              </p>
              <p className="text-xs text-gray-500">
                支援 JPG、PNG、PDF 格式，不超過 10MB
              </p>
            </div>
          )}

          {/* Status Message */}
          {status && !isUploading && (
            <div className={`text-sm font-medium ${
              status === '已上傳！' ? 'text-green-700' :
              status.includes('失敗') || status.includes('不支援') || status.includes('超過') ? 'text-red-700' :
              'text-blue-700'
            }`}>
              {status}
            </div>
          )}

          {/* Success Actions */}
          {status === '已上傳！' && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleReset()
              }}
              className="text-sm text-blue-600 hover:text-blue-700 underline"
            >
              重新上傳
            </button>
          )}

          {/* Error Actions */}
          {(status.includes('失敗') || status.includes('不支援') || status.includes('超過')) && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleReset()
              }}
              className="text-sm text-red-600 hover:text-red-700 underline"
            >
              重試
            </button>
          )}
        </div>
      </div>

      {/* Success Preview */}
      {status === '已上傳！' && fileName && (
        <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Check className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-green-800">{fileName}</p>
              <p className="text-xs text-green-600">上傳完成</p>
            </div>
            <button
              onClick={handleReset}
              className="text-sm text-green-600 hover:text-green-700 hover:bg-green-100 px-3 py-1 rounded-lg transition-colors"
            >
              重新上傳
            </button>
          </div>
        </div>
      )}
    </div>
  )
}