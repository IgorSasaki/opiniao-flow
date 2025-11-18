import { LucideIcon } from 'lucide-react'

export interface KPICardProps {
  change: string
  color: 'primary' | 'secondary' | 'accent' | string
  icon: LucideIcon
  label: string
  value: string
}
