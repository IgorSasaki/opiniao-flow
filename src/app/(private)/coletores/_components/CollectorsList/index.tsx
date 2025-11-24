import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { LinkIcon, Mail, MoreHorizontal, Users } from 'lucide-react'
import { FC } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { CollectorsListProps } from './types'

export const CollectorsList: FC<CollectorsListProps> = ({
  collectors,
  surveys
}) => {
  const getCollectorIcon = (type: string) => {
    switch (type) {
      case 'email':
        return Mail
      case 'link':
        return LinkIcon
      case 'panel':
        return Users
      default:
        return Mail
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300'
      case 'paused':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300'
      case 'stopped':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getSurveyTitle = (surveyId: string) => {
    return surveys.find(s => s.id === surveyId)?.title || 'Unknown Survey'
  }

  if (collectors.length === 0) {
    return (
      <Card className="p-12 text-center">
        <Users className="text-muted-foreground mx-auto mb-4 h-12 w-12 opacity-50" />
        <p className="text-muted-foreground">
          Ainda não há coletores. Crie um para começar a coletar respostas..
        </p>
      </Card>
    )
  }

  return (
    <div className="space-y-3">
      {collectors.map(collector => {
        const Icon = getCollectorIcon(collector.type)
        return (
          <Card
            className="p-4 transition-shadow hover:shadow-md"
            key={collector.id}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-1 items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-2">
                  <Icon className="text-primary h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-foreground font-semibold">
                    {collector.name}
                  </h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {getSurveyTitle(collector.surveyId)}
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <Badge className="capitalize" variant="outline">
                      {collector.type}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      Criado em{' '}
                      {format(new Date(collector.createdAt), 'dd/MM/yyyy', {
                        locale: ptBR
                      })}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-muted-foreground text-sm">Respostas</p>
                  <p className="text-foreground text-xl font-bold">
                    {collector.responseCount}
                  </p>
                </div>
                <Badge className={getStatusColor(collector.status)}>
                  {collector.status.charAt(0).toUpperCase() +
                    collector.status.slice(1)}
                </Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="sm" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Visualizar detalhes</DropdownMenuItem>
                    <DropdownMenuItem>Copiar link</DropdownMenuItem>
                    <DropdownMenuItem>Editar</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      Para coletores
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
