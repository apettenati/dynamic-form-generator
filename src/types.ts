export interface FormData {
  tag: string
  name: string
  type: string
  human_label: string
  conditional?: Conditional
}

export interface Conditional {
  name: string
  show_if: (value: any) => boolean
}

export interface FormStateItem {
  name: string
  value: string
  type: string
}