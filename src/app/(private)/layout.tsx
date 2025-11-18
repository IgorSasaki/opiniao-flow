import { NextPage } from 'next'
import { ReactNode } from 'react'

import { Header } from '@/components/commons/structure/Header'
import { Sidebar } from '@/components/commons/structure/Sidebar'

interface PrivateLayoutProps {
  children: ReactNode
}

const PrivateLayout: NextPage<PrivateLayoutProps> = async ({ children }) => {
  return (
    <div className="bg-background flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="bg-background flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}

export default PrivateLayout
