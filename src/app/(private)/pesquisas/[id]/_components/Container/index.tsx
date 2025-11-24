'use client'
import { FC } from 'react'

import { useSurveys } from '@/hooks/useSurveys'

import { Header } from '../Header'
import { Highlights } from '../Highlights'
import { Questions } from '../Questions'
import { ContainerProps } from './types'

export const Container: FC<ContainerProps> = ({ surveyId }) => {
  const { surveys, updateSurvey } = useSurveys()
  const survey = surveys.find(s => s.id === surveyId)

  if (!survey) {
    return (
      <div className="p-8">
        <p className="text-muted-foreground">Survey not found</p>
      </div>
    )
  }

  return (
    <>
      <Header survey={survey} updateSurvey={updateSurvey} />

      <Highlights survey={survey} />

      <Questions survey={survey} />
    </>
  )
}
