'use client'

import { X, Plus } from 'lucide-react'
import { FC } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import { EditorProps } from './types'

export const Editor: FC<EditorProps> = ({ question, onUpdate }) => {
  const handleUpdateOptions = (newOptions: string[]) => {
    onUpdate(question.id, { options: newOptions })
  }

  const addOption = () => {
    const options = question.options || []
    handleUpdateOptions([...options, `Option ${options.length + 1}`])
  }

  const removeOption = (idx: number) => {
    const options = question.options || []
    handleUpdateOptions(options.filter((_, i) => i !== idx))
  }

  const updateOption = (idx: number, value: string) => {
    const options = question.options || []
    const newOptions = [...options]
    newOptions[idx] = value
    handleUpdateOptions(newOptions)
  }

  return (
    <Card className="border-primary/30 bg-primary/5 space-y-6 p-6">
      <div className="space-y-2">
        <Label>Título da questão</Label>
        <Textarea
          onChange={e => onUpdate(question.id, { text: e.target.value })}
          placeholder="Digite sua questão"
          rows={3}
          value={question.text}
        />
      </div>

      {question.type === 'multiple-choice' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label>Opções</Label>
            <Button
              className="gap-1"
              onClick={addOption}
              size="sm"
              variant="outline"
            >
              <Plus className="h-3 w-3" />
              Adicionar uma opção
            </Button>
          </div>

          <div className="space-y-2">
            {(question.options || []).map((option, idx) => (
              <div className="flex items-center gap-2" key={idx}>
                <Input
                  onChange={e => updateOption(idx, e.target.value)}
                  placeholder={`Option ${idx + 1}`}
                  value={option}
                />
                <Button
                  className="text-destructive"
                  onClick={() => removeOption(idx)}
                  size="sm"
                  variant="ghost"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        <Checkbox
          onCheckedChange={checked =>
            onUpdate(question.id, { required: !!checked })
          }
          checked={question.required}
          id="required"
        />
        <Label className="cursor-pointer font-normal" htmlFor="required">
          Esta pergunta é obrigatória.
        </Label>
      </div>
    </Card>
  )
}
