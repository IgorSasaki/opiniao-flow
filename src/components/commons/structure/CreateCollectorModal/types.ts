import { Collector, Survey } from '@/lib/types'

export interface CreateCollectorModalProps {
  addCollector: (
    collector: Omit<Collector, 'id' | 'createdAt' | 'responseCount'>
  ) => Collector
  surveys: Survey[]
}
