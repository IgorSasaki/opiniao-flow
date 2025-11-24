'use client'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'

import { Card } from '@/components/ui/card'
import { useSurveyBuilder } from '@/hooks/useSurveyBuilder'
import { useSurveys } from '@/hooks/useSurveys'

import { Editor } from '../Editor'
import { Header } from '../Header'
import { Preview } from '../Preview'
import { QuestionPanel } from '../QuestionPanel'
import { QuestionsList } from '../QuestionsList'
import { Title } from '../Title'
import { ContainerProps } from './types'

export const Container: FC<ContainerProps> = ({ surveyId }) => {
  const router = useRouter()
  const { surveys } = useSurveys()
  const {
    questions,
    selectedQuestionId,
    setSelectedQuestionId,
    addQuestion,
    updateQuestion,
    deleteQuestion,
    moveQuestion,
    saveToSurvey
  } = useSurveyBuilder(surveyId)
  const [showPreview, setShowPreview] = useState(false)

  const survey = surveys.find(s => s.id === surveyId)
  const selectedQuestion = questions.find(q => q.id === selectedQuestionId)

  if (!survey) {
    return (
      <div className="p-8">
        <p className="text-muted-foreground">Pesquisa não encontrada</p>
      </div>
    )
  }

  return (
    <>
      <Header
        router={router}
        saveToSurvey={saveToSurvey}
        setShowPreview={setShowPreview}
        showPreview={showPreview}
      />

      <Title description={survey.description} title={survey.title} />

      {showPreview ? (
        <Preview questions={questions} />
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <Card className="p-6">
              <div className="mb-6">
                <h2 className="text-foreground mb-2 text-lg font-semibold">
                  Questões
                </h2>
                <p className="text-muted-foreground text-sm">
                  {questions.length} Questão{questions.length !== 1 ? 's' : ''}{' '}
                  Adicionada
                </p>
              </div>

              {questions.length === 0 ? (
                <div className="py-12 text-center">
                  <p className="text-muted-foreground">
                    Ainda não há perguntas. Adicione uma para começar.
                  </p>
                </div>
              ) : (
                <QuestionsList
                  onDeleteQuestion={deleteQuestion}
                  onMoveQuestion={moveQuestion}
                  onSelectQuestion={setSelectedQuestionId}
                  questions={questions}
                  selectedQuestionId={selectedQuestionId}
                />
              )}
            </Card>

            {selectedQuestion && (
              <Editor onUpdate={updateQuestion} question={selectedQuestion} />
            )}
          </div>

          <div>{<QuestionPanel onAddQuestion={addQuestion} />}</div>
        </div>
      )}
    </>
  )
}
