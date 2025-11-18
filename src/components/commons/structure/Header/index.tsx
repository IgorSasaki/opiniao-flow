'use client'

import { User, LogOut, ChevronDown } from 'lucide-react'
import { FC, useState } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useAuth } from '@/contexts/Auth'

export const Header: FC = () => {
  const { user, logout } = useAuth()
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="bg-card border-border flex h-16 items-center justify-between border-b px-6">
      <div className="flex flex-1 items-center gap-4">
        <div className="bg-muted flex w-64 items-center gap-2 rounded-lg px-3 py-2">
          <svg
            className="text-muted-foreground h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
          <input
            className="text-foreground placeholder:text-muted-foreground w-full bg-transparent text-sm outline-none"
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Buscar pesquisa, usuários, ..."
            type="text"
            value={searchQuery}
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="hover:bg-muted flex items-center gap-2 rounded-lg px-3 py-1 transition-colors">
              <div className="bg-primary/20 flex h-8 w-8 items-center justify-center rounded-full">
                <User className="text-primary h-4 w-4" />
              </div>
              <span className="text-foreground hidden text-sm font-medium sm:inline">
                {user?.name}
              </span>
              <ChevronDown className="text-muted-foreground h-4 w-4" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-56">
            <article className="px-4 py-3">
              <p className="text-foreground text-sm font-medium">
                {user?.name}
              </p>
              <p className="text-muted-foreground text-xs">{user?.email}</p>
              <p className="text-primary mt-1 text-xs capitalize">
                {user?.role}
              </p>
            </article>
            <DropdownMenuItem>Configurações</DropdownMenuItem>
            <DropdownMenuItem>Meu espaço de trabalho</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive" onClick={logout}>
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
