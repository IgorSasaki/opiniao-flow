'use client'

import { ArrowLeft, Edit, Pause, Play } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { Button } from '@/components/ui/button'

import { HeaderProps } from './types'

export const Header: FC<HeaderProps> = ({ survey, updateSurvey }) => {
  const router = useRouter()

  const toggleStatus = () => {
    updateSurvey(survey.id, {
      status: survey.status === 'active' ? 'paused' : 'active'
    })
  }

  return (
    <>
      <Button
        className="mb-4 gap-2"
        onClick={() => router.back()}
        variant="ghost"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar
      </Button>

      <div className="flex items-start justify-between">
        <article className="space-y-2">
          <h1 className="text-foreground text-3xl font-bold">{survey.title}</h1>
          <p className="text-muted-foreground">{survey.description}</p>
        </article>

        <section className="flex gap-2">
          <Button className="gap-2" onClick={toggleStatus} variant="outline">
            {survey.status === 'active' ? (
              <>
                <Pause className="h-4 w-4" />
                Pausar
              </>
            ) : (
              <>
                <Play className="h-4 w-4" />
                Lançar
              </>
            )}
          </Button>
          <Button className="gap-2">
            <Edit className="h-4 w-4" />
            Editar
          </Button>
        </section>
      </div>
    </>
  )
}
