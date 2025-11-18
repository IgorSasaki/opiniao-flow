import { FC } from 'react'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

const SURVEYS = [
  { id: 1, name: 'Q4 Market Research', status: 'active', responses: 324 },
  { id: 2, name: 'Product Feedback', status: 'active', responses: 512 },
  { id: 3, name: 'Brand Perception', status: 'draft', responses: 0 }
]

export const RecentSurveys: FC = async () => {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <h3 className="text-foreground font-semibold">Pesquisas recentes</h3>

        <div className="space-y-3">
          {SURVEYS.map(survey => (
            <section
              className="bg-muted/30 hover:bg-muted flex items-center justify-between rounded-lg p-3 transition-colors"
              key={survey.id}
            >
              <article className="flex-1">
                <p className="text-foreground text-sm font-medium">
                  {survey.name}
                </p>
                <p className="text-muted-foreground text-xs">
                  {survey.responses} pesquisas
                </p>
              </article>

              <figure className="flex items-center gap-2">
                <Badge
                  variant={survey.status === 'active' ? 'default' : 'secondary'}
                >
                  {survey.status}
                </Badge>
              </figure>
            </section>
          ))}
        </div>
      </div>
    </Card>
  )
}
