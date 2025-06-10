"use client"

import { useState, useCallback } from "react"

interface Toast {
  id: string
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

let toastCount = 0

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = useCallback(({ title, description, variant = "default" }: Omit<Toast, "id">) => {
    const id = (++toastCount).toString()
    const newToast: Toast = { id, title, description, variant }

    setToasts((prev) => [...prev, newToast])

    // Auto remove after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 5000)

    return { id }
  }, [])

  const dismiss = useCallback((toastId?: string) => {
    setToasts((prev) => (toastId ? prev.filter((t) => t.id !== toastId) : []))
  }, [])

  return {
    toast,
    dismiss,
    toasts,
  }
}

// Simple toast component for display
export function Toaster() {
  const { toasts, dismiss } = useToast()

  if (toasts.length === 0) return null

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`p-4 rounded-lg shadow-lg max-w-sm ${
            toast.variant === "destructive"
              ? "bg-red-500 text-white"
              : "bg-white text-gray-900 border"
          }`}
        >
          {toast.title && <div className="font-semibold">{toast.title}</div>}
          {toast.description && <div className="text-sm opacity-90">{toast.description}</div>}
          <button
            onClick={() => dismiss(toast.id)}
            className="absolute top-2 right-2 text-xs opacity-70 hover:opacity-100"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  )
}

// Export the toast function for convenience
export const toast = ({ title, description, variant }: Omit<Toast, "id">) => {
  // This is a simplified version - in a real app you'd use a context or state management
  console.log("Toast:", { title, description, variant })
} 