export type ToastType = 'success' | 'error' | 'info' | 'warning'

export interface Toast {
  duration?: number
  id: string
  message: string
  type: ToastType
}

export interface ToastContextType {
  addToast: (message: string, type: ToastType, duration?: number) => string
  removeToast: (id: string) => void
  toasts: Toast[]
}

export interface ToastContainerProps {
  onRemove: (id: string) => void
  toasts: Toast[]
}
