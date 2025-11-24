'use client'

import { useState, useCallback } from 'react'

import { Collector } from '@/lib/types'
import { mockCollectors } from '@/mocks/survey'

export const useCollectors = () => {
  const [collectors, setCollectors] = useState<Collector[]>(mockCollectors)

  const addCollector = useCallback(
    (collector: Omit<Collector, 'id' | 'createdAt' | 'responseCount'>) => {
      const newCollector: Collector = {
        ...collector,
        id: `collector-${Date.now()}`,
        createdAt: new Date(),
        responseCount: 0
      }
      setCollectors(prev => [newCollector, ...prev])
      return newCollector
    },
    []
  )

  const updateCollector = useCallback(
    (id: string, updates: Partial<Collector>) => {
      setCollectors(prev =>
        prev.map(collector =>
          collector.id === id ? { ...collector, ...updates } : collector
        )
      )
    },
    []
  )

  const deleteCollector = useCallback((id: string) => {
    setCollectors(prev => prev.filter(collector => collector.id !== id))
  }, [])

  const getCollectorsBySurvey = useCallback(
    (surveyId: string) => collectors.filter(c => c.surveyId === surveyId),
    [collectors]
  )

  return {
    collectors,
    addCollector,
    updateCollector,
    deleteCollector,
    getCollectorsBySurvey
  }
}
