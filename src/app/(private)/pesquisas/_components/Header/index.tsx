'use client'
import { Plus } from 'lucide-react'
import { FC, useState } from 'react'

import { Button } from '@/components/ui/button'

import { HeaderProps } from './types'

export const Header: FC<HeaderProps> = ({ countSurveys }) => {
  const [_showCreateDialog, setShowCreateDialog] = useState(false)

  return (
    <div className="flex items-start justify-between">
      <div>
        <h1 className="text-foreground text-3xl font-bold text-pretty">
          Pesquisas
        </h1>
        <p className="text-muted-foreground mt-2">
          Gerencie e crie pesquisas para sua investigação. {countSurveys}{' '}
          pesquisas no total.
        </p>
      </div>

      <Button className="gap-2" onClick={() => setShowCreateDialog(true)}>
        <Plus className="h-4 w-4" />
        Criar pesquisa
      </Button>
    </div>
  )
}
