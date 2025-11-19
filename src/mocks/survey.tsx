import { Survey, Collector } from '@/lib/types'

export const mockSurveys: Survey[] = [
  {
    id: 'survey-1',
    title: 'Pesquisa de Mercado Q4',
    description:
      'Compreendendo tendências de mercado e preferências dos clientes',
    status: 'active', // 'ativo'
    createdAt: new Date('2024-11-01'),
    updatedAt: new Date('2024-11-18'),
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        text: 'Qual o seu nível de satisfação com nosso serviço?',
        options: ['Muito Satisfeito', 'Satisfeito', 'Neutro', 'Insatisfeito'],
        required: true,
        order: 1
      },
      {
        id: 'q2',
        type: 'rating',
        text: 'Avalie sua experiência em uma escala de 1 a 5',
        required: true,
        order: 2
      }
    ],
    collectors: ['collector-1', 'collector-2'],
    responseCount: 324,
    completionRate: 87
  },
  {
    id: 'survey-2',
    title: 'Feedback de Produto',
    description: 'Coletar feedback sobre novas funcionalidades do produto',
    status: 'active', // 'ativo'
    createdAt: new Date('2024-11-05'),
    updatedAt: new Date('2024-11-18'),
    questions: [],
    collectors: ['collector-3'],
    responseCount: 512,
    completionRate: 92
  },
  {
    id: 'survey-3',
    title: 'Percepção de Marca',
    description: 'Medir o reconhecimento e a percepção da marca',
    status: 'draft', // 'rascunho'
    createdAt: new Date('2024-11-15'),
    updatedAt: new Date('2024-11-15'),
    questions: [],
    collectors: [],
    responseCount: 0,
    completionRate: 0
  }
]

export const mockCollectors: Collector[] = [
  {
    id: 'collector-1',
    name: 'Campanha de E-mail Q4',
    type: 'email',
    status: 'active', // 'ativo'
    surveyId: 'survey-1',
    createdAt: new Date('2024-11-01'),
    responseCount: 210
  },
  {
    id: 'collector-2',
    name: 'Link Público da Pesquisa',
    type: 'link',
    status: 'active', // 'ativo'
    surveyId: 'survey-1',
    createdAt: new Date('2024-11-03'),
    responseCount: 114
  },
  {
    id: 'collector-3',
    name: 'PWA Coleta de Campo', // Exemplo de um novo coletor para survey-2
    type: 'panel',
    status: 'active', // 'ativo'
    surveyId: 'survey-2',
    createdAt: new Date('2024-11-06'),
    responseCount: 512
  }
]
