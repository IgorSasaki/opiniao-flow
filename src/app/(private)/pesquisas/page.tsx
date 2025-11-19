'use client'
import { NextPage } from 'next'

import { useSurveys } from '@/hooks/useSurveys'

import { Details } from './_components/Details'
import { Header } from './_components/Header'
import { SurveyList } from './_components/SurveyList'

const Page: NextPage = () => {
  const { surveys } = useSurveys()

  return (
    <div className="space-y-8 p-8">
      <Header countSurveys={20} />

      <Details activeSurveys={10} countSurveys={20} draftSurveys={10} />

      <SurveyList surveys={surveys} />
    </div>
  )
}

export default Page
