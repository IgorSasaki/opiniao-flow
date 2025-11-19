export interface CustomEvents {
  'create-survey-form': {
    action: 'open' | 'close'
    data?: {
      name: string
      firstName: string
      lastName: string
      email: string
      phone: string
    }
  }
}
