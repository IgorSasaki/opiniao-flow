import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { Dispatch, SetStateAction } from 'react'

export interface HeaderProps {
  router: AppRouterInstance
  saveToSurvey(): void
  setShowPreview: Dispatch<SetStateAction<boolean>>
  showPreview: boolean
}
