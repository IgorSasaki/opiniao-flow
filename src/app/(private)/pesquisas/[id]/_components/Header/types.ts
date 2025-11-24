import { Survey } from '@/lib/types'

export interface HeaderProps {
  deleteSurvey: (id: string) => void
  survey: Survey
  updateSurvey: (id: string, updates: Partial<Survey>) => void
}
