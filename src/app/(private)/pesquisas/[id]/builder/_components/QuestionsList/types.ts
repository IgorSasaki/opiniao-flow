import { Question } from '@/lib/types'

export interface QuestionsListProps {
  onDeleteQuestion: (id: string) => void
  onMoveQuestion: (id: string, direction: 'up' | 'down') => void
  onSelectQuestion: (id: string) => void
  questions: Question[]
  selectedQuestionId: string | null
}
