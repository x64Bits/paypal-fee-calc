export default function Switch({ active, label, setActive }) {
  const align = active
    ? 'justify-end bg-secondary'
    : 'justify-start bg-gray-300'

  function handleActive() {
    setActive(!active)
  }

  return (
    <div className="flex flex-row items-center">
      <div
        onClick={handleActive}
        className={`${align} rounded-full px-1 py-1 w-14 flex cursor-pointer`}
      >
        <div className="bg-white shadow-sm rounded-full w-5 h-5" />
      </div>
      <span className="text-main ml-3">{label}</span>
    </div>
  )
}
