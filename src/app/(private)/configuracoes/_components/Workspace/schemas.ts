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

export type WorkspaceSettingsInput = z.infer<typeof workspaceSettingsSchema>
