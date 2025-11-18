import { NextPage } from 'next'

import { Header } from './_components/Header'
import { Metrics } from './_components/Metrics'
import { RecentSurveys } from './_components/RecentSurveys'
import { SurveyStats } from './_components/SurveyStats'

const Page: NextPage = async () => {
  return (
    <div className="space-y-8 p-8">
      <Header />

      <Metrics />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SurveyStats />
        </div>

        <div>
          <RecentSurveys />
        </div>
      </div>
    </div>
  )
}

export default Page
