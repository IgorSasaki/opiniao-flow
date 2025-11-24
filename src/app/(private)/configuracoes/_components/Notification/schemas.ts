import { z } from 'zod'

export const workspaceSettingsSchema = z.object({
  workspaceName: z
    .string()
    .min(1, 'Workspace name is required')
    .min(2, 'Workspace name must be at least 2 characters')
    .max(100, 'Workspace name must not exceed 100 characters')
    .trim(),
  industry: z
    .string()
    .min(1, 'Industry is required')
    .max(100, 'Industry must not exceed 100 characters')
    .trim()
})

export const notificationPreferencesSchema = z.object({
  emailResponses: z.boolean(),
  weeklyReports: z.boolean(),
  teamActivity: z.boolean()
})

export const twoFactorSchema = z.object({
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format')
})

export type WorkspaceSettingsInput = z.infer<typeof workspaceSettingsSchema>
export type NotificationPreferencesInput = z.infer<
  typeof notificationPreferencesSchema
>
export type TwoFactorInput = z.infer<typeof twoFactorSchema>
