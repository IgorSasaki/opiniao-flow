'use client'
import { FC, useState } from 'react'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useToast } from '@/contexts/Toast'
import { useEventListener } from '@/hooks/useEventListener'
import { zodResolver } from '@hookform/resolvers/zod'

import { CreateCollectorInput, createCollectorSchema } from './schemas'
import { CreateCollectorModalProps } from './types'

export const CreateCollectorModal: FC<CreateCollectorModalProps> = ({
  surveys,
  addCollector
}) => {
  const { addToast } = useToast()

  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<CreateCollectorInput>({
    resolver: zodResolver(createCollectorSchema),
    defaultValues: {
      name: '',
      type: 'email',
      surveyId: '',
      emailDomain: '',
      maxResponses: undefined
    }
  })

  const handleCloseModal = () => {
    form.reset()
    setIsOpen(false)
  }

  useEventListener('create-collector-form', ({ action }) => {
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

  const onSubmit = async (data: CreateCollectorInput) => {
    setIsSubmitting(true)
    try {
      addCollector({ ...data, status: 'active' })
      addToast(`Coletor "${data.name}" criado com sucesso`, 'success')
      form.reset()
    } catch (error) {
      console.error({ onsubmitError: error })
      addToast('Falha na criação do coletor', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog onOpenChange={handleCloseModal} open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar novo coletor</DialogTitle>
          <DialogDescription>
            Configure um novo método de coleta de dados para sua pesquisa.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome do coletor</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ex.: Campanha por e-mail Q4"
                      {...field}
                      disabled={isSubmitting}
                      autoFocus
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
              name="name"
            />

            <FormField
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pesquisas</FormLabel>
                  <Select
                    disabled={isSubmitting}
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a survey" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {surveys.map(survey => (
                        <SelectItem key={survey.id} value={survey.id}>
                          {survey.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
              name="surveyId"
            />

            <FormField
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de coleta</FormLabel>
                  <Select
                    disabled={isSubmitting}
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="link">Link</SelectItem>
                      <SelectItem value="panel">Painel</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
              name="type"
            />

            <FormField
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Respostas máximas (opcional)</FormLabel>
                  <FormDescription>
                    Deixe em branco para respostas ilimitadas
                  </FormDescription>
                  <FormControl>
                    <Input
                      placeholder="Ex.: 500"
                      type="number"
                      {...field}
                      onChange={e =>
                        field.onChange(
                          e.target.value ? Number(e.target.value) : undefined
                        )
                      }
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
              name="maxResponses"
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
                {isSubmitting ? 'Criando...' : 'Criar coleta'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
