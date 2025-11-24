'use client'

import { FC } from 'react'

import { CreateCollectorModal } from '@/components/commons/structure/CreateCollectorModal'
import { useCollectors } from '@/hooks/useCollectors'
import { useSurveys } from '@/hooks/useSurveys'

import { CollectorsList } from '../CollectorsList'
import { Header } from '../Header'
import { Highlights } from '../Highlights'

export const Container: FC = () => {
  const { collectors, addCollector } = useCollectors()
  const { surveys } = useSurveys()

  return (
    <>
      <Header collectorCount={collectors.length} />

      <Highlights collectors={collectors} />

      <CollectorsList collectors={collectors} surveys={surveys} />

      <CreateCollectorModal addCollector={addCollector} surveys={surveys} />
    </>
  )
}
