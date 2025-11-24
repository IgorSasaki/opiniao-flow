'use client'

import { ArrowLeft, Edit, Pause, Play, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'

import { Button } from '@/components/ui/button'
import { useToast } from '@/contexts/Toast'

import { HeaderProps } from './types'

export const Header: FC<HeaderProps> = ({
  survey,
  updateSurvey,
  deleteSurvey
}) => {
  const router = useRouter()
  const { addToast } = useToast()
  const [isDeleting, setIsDeleting] = useState(false)

  const toggleStatus = () => {
    const newStatus = survey.status === 'active' ? 'paused' : 'active'
    updateSurvey(survey.id, { status: newStatus })
    if (newStatus === 'active') {
      addToast(`Survey "${survey.title}" launched successfully`, 'success')
    } else {
      addToast(`Survey "${survey.title}" paused`, 'info')
    }
  }

  const handleDelete = async () => {
    if (
      !confirm(
        'Tem certeza de que deseja excluir esta pesquisa? Esta ação não pode ser desfeita.'
      )
    ) {
      return
    }
    setIsDeleting(true)
    try {
      deleteSurvey(survey.id)
      addToast(`Pesquisa "${survey.title}" deletada com sucesso`, 'success')

      router.push('/pesquisas')
    } finally {
      setIsDeleting(false)
    }
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

          <Button
            className="gap-2"
            onClick={() => router.push(`/pesquisas/${survey.id}/builder`)}
          >
            <Edit className="h-4 w-4" />
            Editar
          </Button>

          <Button
            className="gap-2"
            disabled={isDeleting}
            onClick={handleDelete}
            variant="destructive"
          >
            <Trash2 className="h-4 w-4" />
            {isDeleting ? 'Excluindo...' : 'Deletar'}
          </Button>
        </section>
      </div>
    </>
  )
}
