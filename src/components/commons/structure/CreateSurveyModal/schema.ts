import { z } from 'zod'

export const createSurveySchema = z.object({
  title: z
    .string()
    .min(1, 'Survey title is required')
    .min(3, 'Survey title must be at least 3 characters')
    .max(100, 'Survey title must not exceed 100 characters')
    .trim(),
  description: z
    .string()
    .max(500, 'Description must not exceed 500 characters')
    .trim()
    .default('')
})
