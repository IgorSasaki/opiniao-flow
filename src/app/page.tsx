import { NextPage } from 'next'
import { redirect } from 'next/navigation'

const Page: NextPage = async () => {
  return redirect('/acesso')
}

export default Page
