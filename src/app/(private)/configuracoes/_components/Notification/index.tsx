'use client'

import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  NotificationPreferencesInput,
  notificationPreferencesSchema
} from './schemas'

export const Notification: FC = () => {
  const notificationsForm = useForm<NotificationPreferencesInput>({
    resolver: zodResolver(notificationPreferencesSchema),
    defaultValues: {
      emailResponses: true,
      weeklyReports: true,
      teamActivity: false
    }
  })

  const onNotificationsSubmit = async (data: NotificationPreferencesInput) => {
    console.log({ data })
  }

  return (
    <div className="border-border border-b pb-6">
      <h2 className="text-foreground mb-4 text-xl font-semibold">
        Notification Preferences
      </h2>
      <Form {...notificationsForm}>
        <form
          className="space-y-4"
          onSubmit={notificationsForm.handleSubmit(onNotificationsSubmit)}
        >
          <FormField
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="cursor-pointer font-normal">
                  Envie-me um e-mail quando as pesquisas receberem respostas
                </FormLabel>
              </FormItem>
            )}
            control={notificationsForm.control}
            name="emailResponses"
          />

          <FormField
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="cursor-pointer font-normal">
                  Relatórios resumidos semanais
                </FormLabel>
              </FormItem>
            )}
            control={notificationsForm.control}
            name="weeklyReports"
          />

          <FormField
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="cursor-pointer font-normal">
                  Notificações de atividades da equipe
                </FormLabel>
              </FormItem>
            )}
            control={notificationsForm.control}
            name="teamActivity"
          />

          <Button type="submit">Salvar preferências</Button>
        </form>
      </Form>
    </div>
  )
}
