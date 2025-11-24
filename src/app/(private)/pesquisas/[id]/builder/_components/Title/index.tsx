import { FC } from 'react'

import { TitleProps } from './types'

export const Title: FC<TitleProps> = ({ title, description }) => {
  return (
    <article className="space-y-2">
      <h1 className="text-foreground text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </article>
  )
}
