import { useEffect, useState } from 'react'
import { defaultPercentage } from '../utils/calculate-percentage'

function PercentageField() {
  const [percentage, setPercentage] = useState(defaultPercentage)

  useEffect(() => {
    const IS_SERVER = typeof window === 'undefined'

    if (!IS_SERVER) {
      const value = localStorage.getItem('percentage')

      !!value && setPercentage(value)
    }
  }, [])

  const handleSetPercentag = (event) => {
    event.preventDefault()
    const { value } = event.target

    if (value <= 100 && value >= 0) {
      const finalValue = value === '0' ? null : value
      setPercentage(finalValue)
      localStorage.setItem('percentage', finalValue)
    }
  }

  return (
    <div className="flex flex-row justify-between items-center">
      <label htmlFor="percentage-field" className="text-secondary text-xl">
        Porcentaje de comisión:
      </label>
      <div className="mt-3 flex flex-row bg-field-bg border-field-border border-2 rounded-xl px-3 items-center">
        <input
          id="percentage-field"
          autoFocus
          type="number"
          placeholder=""
          className="bg-field-bg text-primary w-12 py-2 text-right"
          onChange={handleSetPercentag}
          value={percentage}
        />
        <span className="ml-2 text-gray-500 text-xl">%</span>
      </div>
    </div>
  )
}

export { PercentageField }
