export interface Survey {
  collectors: string[]
  completionRate: number
  createdAt: Date
  description: string
  id: string
  questions: Question[]
  responseCount: number
  status: 'draft' | 'active' | 'paused' | 'completed'
  title: string
  updatedAt: Date
}

export interface Question {
  id: string
  options?: string[]
  order: number
  required: boolean
  text: string
  type: 'multiple-choice' | 'text' | 'rating' | 'matrix'
}

export interface Collector {
  createdAt: Date
  id: string
  name: string
  responseCount: number
  status: 'active' | 'paused' | 'stopped'
  surveyId: string
  type: 'email' | 'link' | 'panel'
}

export interface Response {
  answers: Record<string, string | number>
  id: string
  submittedAt: Date
  surveyId: string
}

export interface User {
  createdAt: Date
  email: string
  id: string
  name: string
  role: 'admin' | 'researcher' | 'viewer'
}
