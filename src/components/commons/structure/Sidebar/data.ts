import { BarChart3, Zap, Settings, FileText, Users, Home } from 'lucide-react'

export const NAV_ITEMS = [
  {
    href: '/dashboard',
    label: 'Início',
    icon: Home
  },
  {
    href: '/pesquisas',
    label: 'Pesquisas',
    icon: FileText
  },
  {
    href: '/coletores',
    label: 'Coletores',
    icon: Zap
  },
  {
    href: '/relatorio',
    label: 'Relatórios',
    icon: BarChart3
  },
  {
    href: '/usuarios',
    label: 'Usuários',
    icon: Users
  },
  {
    href: '/configuracoes',
    label: 'Configurações',
    icon: Settings
  }
]
