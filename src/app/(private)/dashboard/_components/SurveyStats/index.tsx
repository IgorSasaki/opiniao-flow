'use client'

import { FC } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

import { Card } from '@/components/ui/card'

const data = [
  { week: 'Semana 1', responses: 240, completions: 210 },
  { week: 'Semana 2', responses: 340, completions: 290 },
  { week: 'Semana 3', responses: 280, completions: 240 },
  { week: 'Semana 4', responses: 420, completions: 380 },
  { week: 'Semana 5', responses: 390, completions: 350 },
  { week: 'Semana 6', responses: 520, completions: 460 }
]

export const SurveyStats: FC = async () => {
  return (
    <Card className="p-6">
      <section className="space-y-4">
        <article>
          <h3 className="text-foreground font-semibold">
            Respostas à pesquisa
          </h3>
          <p className="text-muted-foreground text-sm">
            Visão geral das últimas 6 semanas
          </p>
        </article>

        <ResponsiveContainer height={250} width="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
            <XAxis dataKey="week" stroke="var(--muted-foreground)" />
            <YAxis stroke="var(--muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '8px'
              }}
            />
            <Line
              dataKey="responses"
              stroke="var(--chart-1)"
              strokeWidth={2}
              type="monotone"
            />
            <Line
              dataKey="completions"
              stroke="var(--chart-2)"
              strokeWidth={2}
              type="monotone"
            />
          </LineChart>
        </ResponsiveContainer>
      </section>
    </Card>
  )
}
