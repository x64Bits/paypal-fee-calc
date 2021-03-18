import { useEffect, useRef } from 'react'
import { BiChevronUp, BiChevronDown } from 'react-icons/bi'

export default function NumberField({
  value,
  handleChange,
  label,
  typeActive,
}) {
  const fieldRef = useRef(null)

  useEffect(() => {
    fieldRef.current.focus()
  }, [typeActive])

  useEffect(() => {
    setTimeout(() => {
      // Delay focus while loading
      fieldRef.current.focus()
    }, 250)
  }, [fieldRef])

  function handleSpinUpValue() {
    const newValue = !!value ? (parseFloat(value) + 1).toFixed(2) : 1

    handleChange(newValue)
  }

  function handleSpinDownValue() {
    const mathValue = !!value ? (parseFloat(value) - 1).toFixed(2) : null

    const newValue = mathValue >= 1 ? mathValue : 0

    handleChange(newValue)
  }

  function handleSetValue(e) {
    const newValue = e.target.value
    handleChange(newValue)
  }

  function SpinButtons() {
    return (
      <div className="flex flex-col bg-field-border rounded-md">
        <BiChevronUp
          className="text-primary text-lg"
          onClick={handleSpinUpValue}
        />
        <BiChevronDown
          className="text-primary text-lg"
          onClick={handleSpinDownValue}
        />
      </div>
    )
  }

  return (
    <div className="mt-4">
      <label>
        <span className="text-secondary">{label}</span>
        <div className="mt-2 flex flex-row bg-field-bg border-field-border border-2 rounded-xl px-3 items-center">
          <span className="mr-2 text-gray-500">$</span>
          <input
            ref={fieldRef}
            autofocus
            type="number"
            placeholder="0,0"
            className="bg-field-bg text-primary w-full py-2"
            onChange={handleSetValue}
            value={value}
          />
          <SpinButtons />
        </div>
      </label>
    </div>
  )
}
