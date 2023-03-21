export interface ICheckboxDefault {
  text?: string
  hideText?: boolean
  checked: boolean
  onChange: () => void
  color?: string
  fit?: boolean
  horizontalAlignment?: string
  noBg?: boolean
}

export interface IStyledCheckbox { checked?: boolean }

export interface IText { checked?: boolean }

export interface IContainerAllCheckbox {
  color: string
  fit?: boolean
  horizontalAlignment?: string
  noBg?: boolean
}