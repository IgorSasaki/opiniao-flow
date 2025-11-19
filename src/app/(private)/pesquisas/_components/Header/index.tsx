'use client'
import { Plus } from 'lucide-react'
import { FC } from 'react'

import { Button } from '@/components/ui/button'
import { triggerCustomEvent } from '@/utils/helpers/customEvents/triggerCustomEvent'

import { HeaderProps } from './types'

export const Header: FC<HeaderProps> = ({ countSurveys }) => {
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

      <Button
        onClick={() => {
          triggerCustomEvent({
            eventName: 'create-survey-form',
            data: { action: 'open' }
          })
        }}
        className="gap-2"
      >
        <Plus className="h-4 w-4" />
        Criar pesquisa
      </Button>
    </div>
  )
}
