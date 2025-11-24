export interface CustomEvents {
  'create-collector-form': {
    action: 'open' | 'close'
    data?: Record<string, never>
  }
  'create-survey-form': {
    action: 'open' | 'close'
    data?: Record<string, never>
  }
}
