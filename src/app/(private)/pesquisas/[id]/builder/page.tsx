import { NextPage } from 'next'

import { Container } from './_components/Container'
import { BuilderPageProps } from './types'

const Page: NextPage<BuilderPageProps> = async ({ params }) => {
  const { id } = await params

  return (
    <div className="space-y-6 p-8">
      <Container surveyId={id} />
    </div>
  )
}

export default Page
