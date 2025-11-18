import { FC } from 'react'

export const Header: FC = async () => {
  return (
    <header>
      <h1 className="text-foreground text-3xl font-bold text-pretty">
        Dashboard
      </h1>
      <p className="text-muted-foreground mt-2">
        Bem-vindo de volta! Aqui está a sua visão geral da pesquisa.
      </p>
    </header>
  )
}
