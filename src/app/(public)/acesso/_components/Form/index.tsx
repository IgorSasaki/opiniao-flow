'use client'

import { useRouter } from 'next/navigation'
import type { FC, FormEvent } from 'react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/contexts/Auth'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export const Form: FC = () => {
  const router = useRouter()
  const { login } = useAuth()

  const [rememberMe, setRememberMe] = useLocalStorage<boolean>(
    'opiniao-flow:rememberMe',
    false
  )

  const [rememberedEmail, setRememberedEmail] = useLocalStorage<string>(
    'opiniao-flow:rememberMeEmail',
    ''
  )

  const [email, setEmail] = useState<string>(
    rememberedEmail || 'researcher@opinionstudio.com'
  )
  const [password, setPassword] = useState<string>('demo-password')

  useEffect(() => {
    if (rememberMe) {
      setRememberedEmail(email)
    } else {
      setRememberedEmail('')
    }
  }, [rememberMe, email, setRememberedEmail])

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    login(email, password)
    router.push('/dashboard')
  }

  return (
    <form className="space-y-6" onSubmit={handleLogin}>
      <div className="space-y-2">
        <Label htmlFor="email">E-mail:</Label>
        <Input
          id="email"
          onChange={e => setEmail(e.target.value)}
          placeholder="seu@email.com"
          type="email"
          value={email}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Senha:</Label>
        <Input
          id="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="Digite sua senha"
          type="password"
          value={password}
          required
        />
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          checked={rememberMe}
          id="remember"
          onCheckedChange={checked => setRememberMe(Boolean(checked))}
        />
        <Label
          className="cursor-pointer text-sm font-normal"
          htmlFor="remember"
        >
          Lembre de mim
        </Label>
      </div>

      <Button className="w-full" type="submit">
        Entrar
      </Button>
    </form>
  )
}
