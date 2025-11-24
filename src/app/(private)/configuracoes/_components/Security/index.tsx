import { ArrowRight } from 'lucide-react'
import { FC } from 'react'

import { Button } from '@/components/ui/button'

export const Security: FC = async () => {
  return (
    <div className="border-border border-b pb-6">
      <h2 className="text-foreground mb-4 text-xl font-semibold">
        Dados e segurança
      </h2>

      <div className="space-y-3">
        <div className="bg-muted/50 flex items-center justify-between rounded-lg p-4">
          <div>
            <p className="text-foreground font-medium">
              Autenticação de dois fatores
            </p>
            <p className="text-muted-foreground text-sm">
              Proteja sua conta com 2FA
            </p>
          </div>
          <Button variant="outline">Ativar</Button>
        </div>
        <div className="bg-muted/50 flex items-center justify-between rounded-lg p-4">
          <div>
            <p className="text-foreground font-medium">Chaves API</p>
            <p className="text-muted-foreground text-sm">
              Gerenciar acesso à API
            </p>
          </div>

          <Button className="gap-1" variant="outline">
            Gerenciar <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
