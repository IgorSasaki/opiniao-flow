import { FC } from 'react'

import { Button } from '@/components/ui/button'

import { QUESTION_TYPES } from './data'
import { AddQuestionPanelProps } from './types'

export const QuestionPanel: FC<AddQuestionPanelProps> = ({ onAddQuestion }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-foreground font-semibold">Adicionar questão</h3>

      <div className="space-y-2">
        {QUESTION_TYPES.map(({ type, label, description, icon: Icon }) => (
          <Button
            className="h-auto w-full justify-start gap-3 py-3"
            key={type}
            onClick={() => onAddQuestion(type)}
            variant="outline"
          >
            <Icon className="text-primary h-5 w-5 shrink-0" />
            <div className="text-left">
              <p className="text-sm font-medium">{label}</p>
              <p className="text-muted-foreground text-xs">{description}</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}
