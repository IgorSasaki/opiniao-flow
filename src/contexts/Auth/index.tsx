'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface AuthUser {
  email: string
  id: string
  name: string
  role: 'admin' | 'researcher' | 'viewer'
}

interface AuthContextType {
  isAuthenticated: boolean
  login: (email: string, password: string) => void
  logout: () => void
  user: AuthUser | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock user for demo
const mockUser: AuthUser = {
  id: 'user-1',
  email: 'researcher@opinionstudio.com',
  name: 'Sarah Anderson',
  role: 'admin'
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null)

  const login = (email: string, password: string) => {
    // Mock login - no real authentication
    if (email && password) {
      setUser({ ...mockUser, email, name: email.split('@')[0] })
    }
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return context
}
