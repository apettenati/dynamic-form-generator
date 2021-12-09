export interface FormData {
  tag: string
  name: string
  type: string
  human_label: string
  conditional?: Conditional
}

interface Conditional {
  name: string
  show_if: string
}
