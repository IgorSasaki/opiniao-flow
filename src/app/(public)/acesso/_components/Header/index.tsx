import { FC } from 'react'

export const Header: FC = async () => {
  return (
    <header className="w-full max-w-md space-y-8">
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-lg">
            <span className="text-primary-foreground text-lg font-bold">
              OF
            </span>
          </div>
        </div>

        <h1 className="text-foreground text-3xl font-bold">Opinião Flow</h1>
        <p className="text-muted-foreground mt-2">
          Plataforma de Pesquisa de Opinião
        </p>
      </div>
    </header>
  )
}
