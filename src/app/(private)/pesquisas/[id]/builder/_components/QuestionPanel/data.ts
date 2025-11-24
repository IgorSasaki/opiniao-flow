import { Grid2x2, ListTodo, MessageCircle, Star } from 'lucide-react'

export const QUESTION_TYPES = [
  {
    type: 'multiple-choice' as const,
    label: 'Múltipla escolha',
    description: 'Resposta única',
    icon: ListTodo
  },
  {
    type: 'text' as const,
    label: 'Texto curto',
    description: 'Aberto',
    icon: MessageCircle
  },
  {
    type: 'rating' as const,
    label: 'Escala de classificação',
    description: 'Escala de 1 a 5',
    icon: Star
  },
  {
    type: 'matrix' as const,
    label: 'Matriz',
    description: 'Formato de grade',
    icon: Grid2x2
  }
]
