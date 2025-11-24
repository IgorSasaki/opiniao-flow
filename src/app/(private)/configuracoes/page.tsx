import { NextPage } from 'next'

import { Card } from '@/components/ui/card'

import { DangerZone } from './_components/DangerZone'
import { Header } from './_components/Header'
import { Notification } from './_components/Notification'
import { Security } from './_components/Security'
import { Workspace } from './_components/Workspace'

const Page: NextPage = async () => {
  return (
    <div className="max-w-4xl space-y-8 p-8">
      <Header />

      <Card className="space-y-6 p-8">
        <Workspace />

        <Notification />

        <Security />

        <DangerZone />
      </Card>
    </div>
  )
}

export default Page
