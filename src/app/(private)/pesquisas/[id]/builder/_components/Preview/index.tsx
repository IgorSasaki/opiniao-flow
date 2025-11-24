'use client'

import { FC } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { Question } from '@/lib/types'

import { PreviewProps } from './types'

export const Preview: FC<PreviewProps> = ({ questions }) => {
  const renderQuestion = (question: Question) => {
    switch (question.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-3">
            <RadioGroup>
              {(question.options || []).map((option, idx) => (
                <div className="flex items-center gap-2" key={idx}>
                  <RadioGroupItem id={`${question.id}-${idx}`} value={option} />
                  <Label
                    className="cursor-pointer font-normal"
                    htmlFor={`${question.id}-${idx}`}
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )
      case 'text':
        return <Textarea placeholder="Enter your answer" />
      case 'rating':
        return (
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map(rating => (
              <Button className="w-10" key={rating} size="lg" variant="outline">
                {rating}
              </Button>
            ))}
          </div>
        )
      case 'matrix':
        return (
          <div className="text-muted-foreground text-sm">
            Pré-visualização da questão da matriz
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <Card className="bg-card p-8">
        <div className="space-y-6">
          {questions.length === 0 ? (
            <p className="text-muted-foreground text-center">
              Não há questões para pré-visualizar
            </p>
          ) : (
            questions.map(question => (
              <div
                className="border-border border-b pb-6 last:border-b-0"
                key={question.id}
              >
                <div className="mb-4 flex items-start gap-2">
                  <label className="text-foreground flex-1 font-medium">
                    {question.text}
                    {question.required && (
                      <span className="text-destructive ml-1">*</span>
                    )}
                  </label>
                </div>
                {renderQuestion(question)}
              </div>
            ))
          )}
        </div>

        {questions.length > 0 && (
          <Button className="mt-6 w-full">Enviar pesquisa</Button>
        )}
      </Card>
    </div>
  )
}
