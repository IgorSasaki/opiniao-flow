import { FC } from 'react'

import { cn } from '@/lib/utils'

import { KPICardProps } from './types'

export const KPICard: FC<KPICardProps> = ({
  label,
  value,
  change,
  icon: Icon,
  color
}) => {
  const colorClasses = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    accent: 'bg-accent/10 text-accent'
  }

  return (
    <div className="bg-card border-border hover:border-primary/50 rounded-lg border p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <article className="space-y-2">
          <p className="text-muted-foreground text-sm font-medium">{label}</p>
          <p className="text-foreground text-3xl font-bold">{value}</p>
          <p className="text-muted-foreground text-xs">{change}</p>
        </article>

        <figure
          className={cn(
            'rounded-lg p-3',
            colorClasses[color as keyof typeof colorClasses]
          )}
        >
          <Icon className="h-5 w-5" />
        </figure>
      </div>
    </div>
  )
}
