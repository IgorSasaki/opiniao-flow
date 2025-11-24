import { ChevronDown, ChevronUp, Trash2 } from 'lucide-react'
import { FC } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { QuestionsListProps } from './types'

export const QuestionsList: FC<QuestionsListProps> = ({
  questions,
  selectedQuestionId,
  onSelectQuestion,
  onDeleteQuestion,
  onMoveQuestion
}) => {
  return (
    <div className="space-y-2">
      {questions.map((question, idx) => (
        <button
          className={cn(
            'w-full rounded-lg border-2 p-4 text-left transition-colors',
            selectedQuestionId === question.id
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/50'
          )}
          key={question.id}
          onClick={() => onSelectQuestion(question.id)}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-primary font-semibold">
                  Q{question.order}
                </span>
                <p className="text-foreground line-clamp-1 flex-1 font-medium">
                  {question.text}
                </p>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <Badge className="text-xs capitalize" variant="secondary">
                  {question.type.replace('-', ' ')}
                </Badge>
                {question.required && (
                  <Badge className="text-xs" variant="destructive">
                    Required
                  </Badge>
                )}
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Button
                onClick={e => {
                  e.stopPropagation()
                  onMoveQuestion(question.id, 'up')
                }}
                disabled={idx === 0}
                size="sm"
                variant="ghost"
              >
                <ChevronUp className="h-4 w-4" />
              </Button>
              <Button
                onClick={e => {
                  e.stopPropagation()
                  onMoveQuestion(question.id, 'down')
                }}
                disabled={idx === questions.length - 1}
                size="sm"
                variant="ghost"
              >
                <ChevronDown className="h-4 w-4" />
              </Button>
              <Button
                onClick={e => {
                  e.stopPropagation()
                  onDeleteQuestion(question.id)
                }}
                className="text-destructive hover:text-destructive"
                size="sm"
                variant="ghost"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}
