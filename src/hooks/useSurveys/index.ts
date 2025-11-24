'use client'

import { useState, useCallback } from 'react'

import { Survey } from '@/lib/types'
import { mockSurveys } from '@/mocks/survey'

export const useSurveys = () => {
  const [surveys, setSurveys] = useState<Survey[]>(mockSurveys)
  const [selectedSurvey, setSelectedSurvey] = useState<Survey | null>(null)

  const createSurvey = useCallback((title: string, description: string) => {
    const newSurvey: Survey = {
      id: `survey-${Date.now()}`,
      title,
      description,
      status: 'draft',
      createdAt: new Date(),
      updatedAt: new Date(),
      questions: [],
      collectors: [],
      responseCount: 0,
      completionRate: 0
    }
    setSurveys(prev => [newSurvey, ...prev])
    return newSurvey
  }, [])

  const updateSurvey = useCallback((id: string, updates: Partial<Survey>) => {
    setSurveys(prev =>
      prev.map(survey =>
        survey.id === id
          ? { ...survey, ...updates, updatedAt: new Date() }
          : survey
      )
    )
  }, [])

  const deleteSurvey = useCallback((id: string) => {
    setSurveys(prev => prev.filter(survey => survey.id !== id))
  }, [])

  const getSurveyById = useCallback(
    (id: string) => surveys.find(survey => survey.id === id),
    [surveys]
  )

  return {
    surveys,
    selectedSurvey,
    setSelectedSurvey,
    createSurvey,
    updateSurvey,
    deleteSurvey,
    getSurveyById
  }
}
