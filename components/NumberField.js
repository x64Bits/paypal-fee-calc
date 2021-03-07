export default function NumberField({ value, handleChange, label }) {
  return (
    <label>
      <span className="text-main">{label}</span>
      <div className="mt-2 flex flex-row bg-field-bg border-field-border border-2 rounded-xl px-3 items-center">
        <span className="mr-2 text-gray-500">$</span>
        <input
          type="number"
          placeholder="0,0"
          className="bg-field-bg text-gray-700 w-full py-3"
          onChange={handleChange}
          value={value}
        />
      </div>
    </label>
  )
}
