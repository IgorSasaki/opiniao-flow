'use client'

import { useState, useCallback } from 'react'

import { Question } from '@/lib/types'

import { useSurveys } from '../useSurveys'

export const useSurveyBuilder = (surveyId: string) => {
  const { surveys, updateSurvey } = useSurveys()
  const survey = surveys.find(s => s.id === surveyId)
  const [questions, setQuestions] = useState<Question[]>(
    survey?.questions || []
  )
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(
    null
  )

  const addQuestion = useCallback(
    (type: 'multiple-choice' | 'text' | 'rating' | 'matrix') => {
      const newQuestion: Question = {
        id: `question-${Date.now()}`,
        type,
        text: 'Untitled Question',
        options:
          type === 'multiple-choice' ? ['Option 1', 'Option 2'] : undefined,
        required: false,
        order: questions.length + 1
      }
      setQuestions(prev => [...prev, newQuestion])
      setSelectedQuestionId(newQuestion.id)
      return newQuestion
    },
    [questions.length]
  )

  const updateQuestion = useCallback(
    (id: string, updates: Partial<Question>) => {
      setQuestions(prev =>
        prev.map(q => (q.id === id ? { ...q, ...updates } : q))
      )
    },
    []
  )

  const deleteQuestion = useCallback((id: string) => {
    setQuestions(prev => prev.filter(q => q.id !== id))
    setSelectedQuestionId(null)
  }, [])

  const moveQuestion = useCallback((id: string, direction: 'up' | 'down') => {
    setQuestions(prev => {
      const idx = prev.findIndex(q => q.id === id)

      if (
        (direction === 'up' && idx === 0) ||
        (direction === 'down' && idx === prev.length - 1)
      ) {
        return prev
      }

      const newQuestions = [...prev]
      const swapIdx = direction === 'up' ? idx - 1 : idx + 1
      const temp = newQuestions[idx]
      newQuestions[idx] = newQuestions[swapIdx]
      newQuestions[swapIdx] = temp

      return newQuestions.map((q, i) => ({ ...q, order: i + 1 }))
    })
  }, [])

  const saveToSurvey = useCallback(() => {
    updateSurvey(surveyId, { questions })
  }, [surveyId, questions, updateSurvey])

  return {
    questions,
    selectedQuestionId,
    setSelectedQuestionId,
    addQuestion,
    updateQuestion,
    deleteQuestion,
    moveQuestion,
    saveToSurvey
  }
}
