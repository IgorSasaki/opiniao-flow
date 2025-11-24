import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { Dispatch, SetStateAction } from 'react'

import { ToastType } from '@/contexts/Toast/types'

export interface HeaderProps {
  addToast: (message: string, type: ToastType, duration?: number) => string
  router: AppRouterInstance
  saveToSurvey(): void
  setShowPreview: Dispatch<SetStateAction<boolean>>
  showPreview: boolean
}
