export default function Switch({ active, setActive }) {
  const align = active
    ? 'justify-end bg-field-border'
    : 'justify-start bg-secondary'

  function handleActive() {
    setActive(!active)
  }

  return (
    <div className="flex flex-row items-center justify-between">
      <span className="text-secondary">
        Tipo de conversión: <b>{active ? 'Enviar' : 'Recibir'}</b>
      </span>
      <div
        onClick={handleActive}
        className={`${align} rounded-full px-1 py-1 w-14 flex cursor-pointer`}
      >
        <div className="bg-white shadow-sm rounded-full w-5 h-5" />
      </div>
    </div>
  )
}
