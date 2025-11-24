import { FC } from 'react'

import { Button } from '@/components/ui/button'

export const DangerZone: FC = async () => {
  return (
    <div>
      <h2 className="text-foreground mb-4 text-xl font-semibold">
        Zona de Perigo
      </h2>

      <div className="space-y-3">
        <div className="border-destructive/30 bg-destructive/5 flex items-center justify-between rounded-lg border p-4">
          <div>
            <p className="text-destructive font-medium">
              Excluir área de trabalho
            </p>
            <p className="text-muted-foreground text-sm">
              Excluir permanentemente este espaço de trabalho e todos os dados
            </p>
          </div>

          <Button variant="destructive">Deletar</Button>
        </div>
      </div>
    </div>
  )
}
