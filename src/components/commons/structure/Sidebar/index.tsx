'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import { cn } from '@/lib/utils'

import { NAV_ITEMS } from './data'

export const Sidebar: FC = () => {
  const pathname = usePathname()

  return (
    <aside className="bg-sidebar border-sidebar-border flex w-64 flex-col border-r">
      <div className="border-sidebar-border border-b p-6">
        <article className="flex items-center gap-2">
          <section className="bg-sidebar-primary flex h-8 w-8 items-center justify-center rounded-lg">
            <span className="text-sidebar-primary-foreground text-sm font-bold">
              OS
            </span>
          </section>

          <article>
            <h1 className="text-sidebar-foreground text-sm font-semibold">
              Opinião Flow
            </h1>
            <p className="text-muted-foreground text-xs">
              Plataforma de pesquisa
            </p>
          </article>
        </article>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {NAV_ITEMS.map(item => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              className={cn(
                'flex items-center gap-3 rounded-lg px-4 py-2 text-sm transition-colors',
                isActive
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              )}
              href={item.href}
              key={item.href}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
