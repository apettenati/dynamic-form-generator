import { FormData, FormStateItem } from '../types'

interface FormFieldProps {
  field: FormData
  formState: FormStateItem[]
}

function setField(field: FormData): JSX.Element {
  return (
    <label className={field.type} htmlFor={field.name}>
      {field.human_label}
      <input name={field.name} type={field.type}></input>
    </label>
  )
}

export default function FormField({
  field,
  formState,
}: FormFieldProps): JSX.Element | null {
  function getConditionalValue() {
    if (!field.conditional) return

    // Get conditional data
    const conditionalFunction = field.conditional.show_if
    const name = field.conditional.name

    // Get matching form item
    const formItem = formState.filter((item) => item.name === name)

    // TODO: handle error that unique item name was not found
    if (formItem.length !== 1) return

    // Look up type and run the function the correct type
    const type = formItem[0].type
    if (type === 'date') {
      const value = formItem[0].value
      const date = new Date(value)
      const showIf = conditionalFunction(date)
      return showIf
    } else {
      const value = formItem[0].value
      const showIf = conditionalFunction(value)
      return showIf
    }
  }

  // Do not generate if the field tag is not a valid input field
  if (field.tag !== 'input') return null

  // If there is no conditional statement, render the input field
  if (!field.conditional) return setField(field)

  // If there is a conditional, evaluate the show_if function
  const showIf = getConditionalValue()

  // If the result is false, do not generate the field
  if (!showIf) return null

  // If the result is true, generate the field
  return setField(field)
}
