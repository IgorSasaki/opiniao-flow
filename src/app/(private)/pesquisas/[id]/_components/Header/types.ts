import { Survey } from '@/lib/types'

export interface HeaderProps {
  survey: Survey
  updateSurvey: (id: string, updates: Partial<Survey>) => void
}
