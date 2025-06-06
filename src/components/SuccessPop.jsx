import React, { useState } from "react"
import { CheckCircle, XCircle, AlertCircle } from "lucide-react"

const Toast = ({ message, type, onClose }) => {
  const icons = {
    success: <CheckCircle className="w-7 h-7 text-green-500" />,
    error: <XCircle className="w-7 h-7 text-red-500" />,
    invalid: <AlertCircle className="w-7 h-7 text-yellow-500" />,
  }

  const barColors = {
    success: "bg-green-500",
    error: "bg-red-500",
    invalid: "bg-yellow-500",
  }

  return (
    <div className="w-96 bg-white font-medium shadow-lg flex items-center p-4 mb-4 relative rounded-lg animate-slideIn overflow-hidden">
      <div className="mr-4">{icons[type]}</div>
      <p className="flex-1 text-gray-800">{message}</p>
      <button
        onClick={onClose}
        className="absolute top-1 right-2 text-gray-500 hover:text-gray-800"
      >
        ✕
      </button>
      <div className={`progress-bar ${barColors[type]}`}></div>
    </div>
  )
}

export const SuccessPop= () => {
  const [toasts, setToasts] = useState([])

  const showToast = (msg, type) => {
    const id = Date.now()
    const newToast = { id, msg, type }
    setToasts([...toasts, newToast])

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h2 className="text-2xl font-bold mb-4">React Tailwind Toast</h2>
      <div className="flex gap-2">
        <button
          onClick={() =>
            showToast("Successfully submitted", "success")
          }
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Success
        </button>
        <button
          onClick={() => showToast("Please fix the error!", "error")}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Error
        </button>
        <button
          onClick={() =>
            showToast("Invalid input, check again", "invalid")
          }
          className="px-4 py-2 bg-yellow-500 text-white rounded"
        >
          Invalid
        </button>
      </div>

      {/* Toasts */}
      <div className="fixed top-6 right-6 flex flex-col items-end z-50">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.msg}
            type={toast.type}
            onClose={() =>
              setToasts((prev) =>
                prev.filter((t) => t.id !== toast.id)
              )
            }
          />
        ))}
      </div>
    </div>
  )
}
