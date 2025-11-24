import { FC } from 'react'

export const Header: FC = async () => {
  return (
    <div>
      <h1 className="text-foreground text-3xl font-bold">Configurações</h1>
      <p className="text-muted-foreground mt-2">
        Gerencie as configurações da sua conta e do aplicativo.
      </p>
    </div>
  )
}
