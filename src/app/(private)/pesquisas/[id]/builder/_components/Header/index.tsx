import { ArrowLeft, Save } from 'lucide-react'
import { FC } from 'react'

import { Button } from '@/components/ui/button'

import { HeaderProps } from './types'

export const Header: FC<HeaderProps> = ({
  router,
  showPreview,
  setShowPreview,
  saveToSurvey,
  addToast
}) => {
  const handleSave = () => {
    saveToSurvey()
    addToast('Alterações salvas com sucesso', 'success')
  }

  return (
    <div className="flex items-center justify-between">
      <Button className="gap-2" onClick={() => router.back()} variant="ghost">
        <ArrowLeft className="h-4 w-4" />
        Voltar
      </Button>

      <div className="flex gap-2">
        <Button onClick={() => setShowPreview(!showPreview)} variant="outline">
          {showPreview ? 'Editar' : 'Visualizar'}
        </Button>

        <Button className="gap-2" onClick={handleSave}>
          <Save className="h-4 w-4" />
          Salvar mudanças
        </Button>
      </div>
    </div>
  )
}
