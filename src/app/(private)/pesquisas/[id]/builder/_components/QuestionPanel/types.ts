export interface AddQuestionPanelProps {
  onAddQuestion: (
    type: 'multiple-choice' | 'text' | 'rating' | 'matrix'
  ) => void
}
