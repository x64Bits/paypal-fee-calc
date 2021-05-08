import { useRecoilState } from 'recoil'
import { percentageState } from '../atoms/percentage'

function PercentageField() {
  const [percentage, setPercentage] = useRecoilState(percentageState)

  const handleSetPercentag = (event) => {
    event.preventDefault()
    const { value } = event.target

    if (value <= 100 && value >= 0) {
      const finalValue = value === '0' ? null : value
      setPercentage(finalValue)
    }
  }

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
          onChange={handleSetPercentag}
          value={percentage}
        />
        <span className="ml-2 text-gray-500 text-xl">%</span>
      </div>
    </div>
  )
}

export { PercentageField }
