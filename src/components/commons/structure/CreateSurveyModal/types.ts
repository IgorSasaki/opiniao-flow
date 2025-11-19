import { z } from 'zod'

import { createSurveySchema } from './schema'

export type CreateSurveyPayload = z.infer<typeof createSurveySchema>
