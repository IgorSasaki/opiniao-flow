import { NextPage } from 'next'

import { Card } from '@/components/ui/card'

import { Form } from './_components/Form'
import { Header } from './_components/Header'

const Page: NextPage = async () => {
  return (
    <div className="from-background to-muted flex min-h-screen items-center justify-center bg-linear-to-br p-4">
      <main className="w-full max-w-md space-y-8">
        <Header />

        <Card className="p-8">
          <Form />
        </Card>
      </main>
    </div>
  )
}

export default Page
