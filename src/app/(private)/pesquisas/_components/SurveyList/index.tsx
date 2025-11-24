'use client'

import { FileText, MoreHorizontal, Trash2, Edit } from 'lucide-react'
import Link from 'next/link'
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

import { SurveyListProps } from './types'

export const SurveyList: FC<SurveyListProps> = ({ surveys }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300'
      case 'draft':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300'
      case 'paused':
        return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300'
      case 'completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-4">
      {surveys.length === 0 ? (
        <Card className="p-12 text-center">
          <FileText className="text-muted-foreground mx-auto mb-4 h-12 w-12 opacity-50" />
          <p className="text-muted-foreground">
            Ainda não há pesquisas. Crie uma para começar.
          </p>
        </Card>
      ) : (
        surveys.map(survey => (
          <Card
            className="p-6 transition-shadow hover:shadow-md"
            key={survey.id}
          >
            <div className="flex items-start justify-between gap-4">
              <Link className="flex-1" href={`/pesquisas/${survey.id}`}>
                <div className="space-y-2">
                  <h3 className="text-foreground hover:text-primary text-lg font-semibold transition-colors">
                    {survey.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2 text-sm">
                    {survey.description}
                  </p>
                  <div className="flex items-center gap-4 pt-2">
                    <div className="text-muted-foreground flex items-center gap-1 text-sm">
                      <span>{survey.questions.length} questões</span>
                    </div>
                    <div className="text-muted-foreground flex items-center gap-1 text-sm">
                      <span>{survey.collectors.length} coletores</span>
                    </div>
                    <div className="text-muted-foreground flex items-center gap-1 text-sm">
                      <span>{survey.responseCount} respostas</span>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="flex items-center gap-2">
                <Badge className={getStatusColor(survey.status)}>
                  {survey.status.charAt(0).toUpperCase() +
                    survey.status.slice(1)}
                </Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="sm" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Editar
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Apagar
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </Card>
        ))
      )}
    </div>
  )
}
