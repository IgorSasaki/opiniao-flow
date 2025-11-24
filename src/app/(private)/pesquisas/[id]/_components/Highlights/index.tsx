import { Badge } from 'lucide-react'
import { FC } from 'react'

import { Card } from '@/components/ui/card'

import { HighlightsProps } from './types'

export const Highlights: FC<HighlightsProps> = ({ survey }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <Card className="p-4">
        <p className="text-muted-foreground text-sm">Status</p>
        <Badge className="mt-2 capitalize">{survey.status}</Badge>
      </Card>

      <Card className="p-4">
        <p className="text-muted-foreground text-sm">Questões</p>
        <p className="text-foreground mt-2 text-2xl font-bold">
          {survey.questions.length}
        </p>
      </Card>

      <Card className="p-4">
        <p className="text-muted-foreground text-sm">Respostas</p>
        <p className="text-foreground mt-2 text-2xl font-bold">
          {survey.responseCount}
        </p>
      </Card>

      <Card className="p-4">
        <p className="text-muted-foreground text-sm">Taxa de conclusão</p>
        <p className="text-foreground mt-2 text-2xl font-bold">
          {survey.completionRate}%
        </p>
      </Card>
    </div>
  )
}
