import { FC } from 'react'

import { DetailsProps } from './types'

export const Details: FC<DetailsProps> = async ({
  countSurveys,
  activeSurveys,
  draftSurveys
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <article className="bg-card border-border rounded-lg border p-4">
        <p className="text-muted-foreground text-sm">Total de pesquisas</p>
        <p className="text-foreground mt-2 text-2xl font-bold">
          {countSurveys}
        </p>
      </article>

      <article className="bg-card border-border rounded-lg border p-4">
        <p className="text-muted-foreground text-sm">Ativas</p>
        <p className="text-primary mt-2 text-2xl font-bold">{activeSurveys}</p>
      </article>

      <article className="bg-card border-border rounded-lg border p-4">
        <p className="text-muted-foreground text-sm">Rascunhos</p>
        <p className="text-accent mt-2 text-2xl font-bold">{draftSurveys}</p>
      </article>
    </div>
  )
}
