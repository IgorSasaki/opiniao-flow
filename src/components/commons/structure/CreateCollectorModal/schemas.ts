import { z } from 'zod'

export const createCollectorSchema = z.object({
  name: z
    .string()
    .min(1, 'Collector name is required')
    .min(2, 'Collector name must be at least 2 characters')
    .max(100, 'Collector name must not exceed 100 characters')
    .trim(),
  type: z.enum(['email', 'link', 'panel'], {
    message: 'Please select a valid collector type'
  }),
  surveyId: z
    .string()
    .min(1, 'Survey selection is required')
    .uuid('Invalid survey ID'),
  emailDomain: z.email('Invalid email domain').optional().or(z.literal('')),
  maxResponses: z
    .number()
    .int('Maximum responses must be a whole number')
    .min(1, 'Maximum responses must be at least 1')
    .max(10000, 'Maximum responses cannot exceed 10,000')
    .optional()
})

export const editCollectorSchema = createCollectorSchema.extend({
  id: z.string().uuid('Invalid collector ID')
})

export type CreateCollectorInput = z.infer<typeof createCollectorSchema>
export type EditCollectorInput = z.infer<typeof editCollectorSchema>
