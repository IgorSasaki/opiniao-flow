'use client'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'

import { WorkspaceSettingsInput, workspaceSettingsSchema } from './schemas'

export const Workspace = () => {
  const workspaceForm = useForm<WorkspaceSettingsInput>({
    resolver: zodResolver(workspaceSettingsSchema),
    defaultValues: {
      workspaceName: 'Estúdio de Opinião',
      industry: 'Pesquisa de mercado'
    }
  })

  const onWorkspaceSubmit = async (data: WorkspaceSettingsInput) => {
    console.log({ data })
  }

  return (
    <div className="border-border border-b pb-6">
      <h2 className="text-foreground mb-4 text-xl font-semibold">
        Workspace Settings
      </h2>
      <Form {...workspaceForm}>
        <form
          className="space-y-4"
          onSubmit={workspaceForm.handleSubmit(onWorkspaceSubmit)}
        >
          <FormField
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome do espaço de trabalho</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            control={workspaceForm.control}
            name="workspaceName"
          />

          <FormField
            render={({ field }) => (
              <FormItem>
                <FormLabel>Indústria</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            control={workspaceForm.control}
            name="industry"
          />

          <Button type="submit">Salvar</Button>
        </form>
      </Form>
    </div>
  )
}
