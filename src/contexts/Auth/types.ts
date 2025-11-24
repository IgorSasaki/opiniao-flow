export interface AuthUser {
  email: string
  id: string
  name: string
  role: 'admin' | 'researcher' | 'viewer'
}

export interface AuthContextType {
  isAuthenticated: boolean
  login: (email: string, password: string) => void
  logout: () => void
  user: AuthUser | null
}
