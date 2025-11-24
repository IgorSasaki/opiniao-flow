import { BarChart3, CheckCircle, Users, Zap } from 'lucide-react'
import { FC } from 'react'

import { KPICard } from '@/components/commons/structure/KPICard'

const KPI = [
  {
    label: 'Total de pesquisas',
    value: '24',
    change: '+4 esta semana',
    icon: BarChart3,
    color: 'primary'
  },
  {
    label: 'Coletores ativas',
    value: '8',
    change: '+2 novos',
    icon: Zap,
    color: 'accent'
  },
  {
    label: 'Respostas totais',
    value: '5,432',
    change: 'Aumento de +12%',
    icon: Users,
    color: 'secondary'
  },
  {
    label: 'Taxa de conclusão',
    value: '87%',
    change: '+5% em relação à semana passada',
    icon: CheckCircle,
    color: 'primary'
  }
]

export const Metrics: FC = async () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {KPI.map((kpi, idx) => (
        <KPICard key={idx} {...kpi} />
      ))}
    </div>
  )
}
