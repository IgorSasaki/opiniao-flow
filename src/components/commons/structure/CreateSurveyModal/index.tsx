'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useEventListener } from '@/hooks/useEventListener'
import { useSurveys } from '@/hooks/useSurveys'
import { zodResolver } from '@hookform/resolvers/zod'

import { createSurveySchema } from './schema'
import { CreateSurveyPayload } from './types'

export const CreateSurveyModal = () => {
  const { createSurvey } = useSurveys()
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<CreateSurveyPayload>({
    resolver: zodResolver(createSurveySchema),
    defaultValues: {
      title: '',
      description: ''
    }
  })

  const handleCloseModal = () => {
    form.reset()
    setIsOpen(false)
  }

  useEventListener('create-survey-form', ({ action }) => {
    switch (action) {
      case 'open': {
        setIsOpen(true)
        break
      }
      case 'close': {
        handleCloseModal()
        break
      }
    }
  })

  const handleSubmit = async (data: CreateSurveyPayload) => {
    setIsSubmitting(true)
    try {
      createSurvey(data.title, data.description)
      form.reset()
      handleCloseModal()
    } catch (error) {
      console.error({ handleSubmitError: error })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog onOpenChange={handleCloseModal} open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar nova pesquisa</DialogTitle>
          <DialogDescription>
            Inicie um novo projeto de pesquisa. Você pode editar os detalhes
            após a criação.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField<CreateSurveyPayload>
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título da pesquisa</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="por exemplo, Satisfação do cliente no quarto trimestre"
                      {...field}
                      disabled={isSubmitting}
                      autoFocus
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
              name="title"
            />

            <FormField<CreateSurveyPayload>
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição (opcional)</FormLabel>
                  <FormDescription>
                    Descreva o objetivo e o escopo desta pesquisa.
                  </FormDescription>
                  <FormControl>
                    <textarea
                      placeholder="e.g., Annual survey to measure customer satisfaction..."
                      {...field}
                      disabled={isSubmitting}
                      rows={3}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
              name="description"
            />

            <div className="flex gap-3 pt-4">
              <Button
                className="flex-1"
                disabled={isSubmitting}
                onClick={handleCloseModal}
                type="button"
                variant="outline"
              >
                Cancelar
              </Button>
              <Button className="flex-1" disabled={isSubmitting} type="submit">
                {isSubmitting ? 'Criando...' : 'Criar pesquisa'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
