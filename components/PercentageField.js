import { useState } from 'react'

function PercentageField() {
  const [value, setValue] = useState('5.4')

  return (
    <div className="flex flex-row justify-between items-center">
      <label htmlFor="percentage-field" className="text-primary text-xl">
        Porcentaje de comisión
      </label>
      <div className="mt-3 flex flex-row bg-field-bg border-field-border border-2 rounded-xl px-3 items-center">
        <input
          id="percentage-field"
          autoFocus
          type="number"
          placeholder=""
          className="bg-field-bg text-primary w-12 py-2 text-right"
          onChange={setValue}
          defaultValue={value}
        />
        <span className="ml-2 text-gray-500 text-xl">%</span>
      </div>
    </div>
  )
}

export { PercentageField }
