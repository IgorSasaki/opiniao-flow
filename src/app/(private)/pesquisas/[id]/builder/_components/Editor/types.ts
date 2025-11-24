import { Question } from '@/lib/types'

export interface EditorProps {
  onUpdate: (id: string, updates: Partial<Question>) => void
  question: Question
}
