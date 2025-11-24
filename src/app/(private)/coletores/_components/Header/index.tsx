import { Plus } from 'lucide-react'
import { FC } from 'react'

import { Button } from '@/components/ui/button'
import { triggerCustomEvent } from '@/utils/helpers/customEvents/triggerCustomEvent'

import { HeaderProps } from './types'

export const Header: FC<HeaderProps> = ({ collectorCount }) => {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h1 className="text-foreground text-3xl font-bold text-pretty">
          Coletores
        </h1>
        <p className="text-muted-foreground mt-2">
          Gerencie os métodos de coletore de dados para suas pesquisas.{' '}
          {collectorCount} total de coletores.
        </p>
      </div>

      <Button
        onClick={() => {
          triggerCustomEvent({
            eventName: 'create-collector-form',
            data: { action: 'open' }
          })
        }}
        className="gap-2"
      >
        <Plus className="h-4 w-4" />
        Adicionar coletor
      </Button>
    </div>
  )
}
