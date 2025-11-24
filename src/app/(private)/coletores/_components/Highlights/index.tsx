import { FC } from 'react'

import { Card } from '@/components/ui/card'

import { HighlightsProps } from './types'

export const Highlights: FC<HighlightsProps> = ({ collectors }) => {
  const activeCollectors = collectors.filter(c => c.status === 'active').length
  const totalResponses = collectors.reduce((sum, c) => sum + c.responseCount, 0)

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <Card className="p-4">
        <p className="text-muted-foreground text-sm">Total de coletores</p>
        <p className="text-foreground mt-2 text-2xl font-bold">
          {collectors.length}
        </p>
      </Card>
      <Card className="p-4">
        <p className="text-muted-foreground text-sm">Ativos</p>
        <p className="text-primary mt-2 text-2xl font-bold">
          {activeCollectors}
        </p>
      </Card>
      <Card className="p-4">
        <p className="text-muted-foreground text-sm">Total de respostas</p>
        <p className="text-accent mt-2 text-2xl font-bold">{totalResponses}</p>
      </Card>
      <Card className="p-4">
        <p className="text-muted-foreground text-sm">
          Média de respostas/coletores
        </p>
        <p className="text-secondary mt-2 text-2xl font-bold">
          {collectors.length > 0
            ? Math.round(totalResponses / collectors.length)
            : 0}
        </p>
      </Card>
    </div>
  )
}
