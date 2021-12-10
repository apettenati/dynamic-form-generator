import { useEffect, useState } from 'react'
import { data } from '../data'
import FormField from './FormField'
import Results from './Results'
import { FormStateItem } from '../types'

export default function Form(): JSX.Element {
  const [formState, setFormState] = useState<FormStateItem[]>([])
  const [showResults, setShowResults] = useState<boolean>(false)

  useEffect(() => {
    // Initialize form state
    const newFormState = [] as FormStateItem[]
    const form = document.querySelector('form') as any
    if (form === null) return
    for (let i = 0; i < form.length; i++) {
      const type = form[i].type
      const name = form[i].name
      const value = type === 'checkbox' ? form[i].checked : form[i].value
      // do not add the submit button to the array
      if (type === 'submit') {
        continue
      }
      newFormState.push({ name, value, type })
    }
    setFormState(newFormState)
  }, [])

  function onSubmit(e: any) {
    // Update form state
    const newFormState = [] as FormStateItem[]
    e.preventDefault()
    for (let i = 0; i < e.target.length; i++) {
      const type = e.target[i].type
      const name = e.target[i].name
      const value =
        type === 'checkbox' ? e.target[i].checked : e.target[i].value
      // do not add the submit button to the array
      if (type === 'submit') {
        continue
      }
      newFormState.push({ name, value, type })
    }
    setFormState(newFormState)

    //Show results
    setShowResults(true)
    return
  }

  function onChange(e: any) {
    // Update state with single changed field
    setShowResults(false)
    const type = e.target.type
    const name = e.target.name
    const value = type === 'checkbox' ? e.target.checked : e.target.value

    const newState = [...formState]
    const index = newState.findIndex((element) => element.name === name)
    newState[index] = { name, value, type }

    setFormState(newState)
    return
  }

  return (
    <div className='app'>
      <div className='container'>
        <h2>Form </h2>
        <form onChange={(e) => onChange(e)} onSubmit={(e) => onSubmit(e)}>
          {data.map((field, i) => (
            <FormField key={i} field={field} formState={formState} />
          ))}
          <input id='submit' type='submit' value='Submit' />
        </form>
      </div>
      {showResults && <Results formState={formState} />}
    </div>
  )
}
