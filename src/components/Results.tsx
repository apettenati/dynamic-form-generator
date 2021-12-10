import { useEffect, useState } from 'react'
import { FormStateItem } from '../types'

interface ResultsProps {
  formState: FormStateItem[]
}

export default function Results({ formState }: ResultsProps): JSX.Element {
  const [formResults, setFormResults] = useState('')

  useEffect(() => {
    const results = formState.reduce((acc, cur) => ({
      ...acc, [cur.name]: cur.value
    }), {})

    const resultsString = JSON.stringify(results, null, 2)
    setFormResults(resultsString)
  }, [formState])

  return (
    <div className='container'>
      <h2>Results </h2>
      <pre className='results'> {formResults}
      </pre>
    </div>
  )
}
