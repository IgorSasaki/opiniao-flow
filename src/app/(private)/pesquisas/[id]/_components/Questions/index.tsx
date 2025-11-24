import { MessageSquare, Plus } from 'lucide-react'
import { FC } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

import { QuestionsProps } from './types'

export const Questions: FC<QuestionsProps> = ({ survey }) => {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-foreground text-xl font-semibold">Questões</h2>
        <Button className="gap-2" size="sm" variant="outline">
          <Plus className="h-4 w-4" />
          Adicionar questão
        </Button>
      </div>

      <div className="space-y-3">
        {survey.questions.length === 0 ? (
          <div className="py-12 text-center">
            <MessageSquare className="text-muted-foreground mx-auto mb-4 h-12 w-12 opacity-50" />
            <p className="text-muted-foreground">Nenhuma questão cadastrada</p>
          </div>
        ) : (
          survey.questions.map(question => (
            <Card
              className="hover:bg-muted/50 p-4 transition-colors"
              key={question.id}
            >
              <div className="flex items-start justify-between gap-4">
                <section className="flex-1">
                  <article className="flex items-center gap-2">
                    <h4 className="text-primary text-sm font-medium">
                      Q{question.order}
                    </h4>
                    <p className="text-foreground font-medium">
                      {question.text}
                    </p>
                  </article>
                  <article className="mt-2 flex items-center gap-2">
                    <h4 className="bg-muted text-muted-foreground rounded px-2 py-1 text-xs">
                      {question.type}
                    </h4>
                    {question.required && (
                      <p className="bg-destructive/10 text-destructive rounded px-2 py-1 text-xs">
                        Obrigatória
                      </p>
                    )}
                  </article>
                </section>
              </div>
            </Card>
          ))
        )}
      </div>
    </Card>
  )
}
