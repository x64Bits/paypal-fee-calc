import Head from 'next/head'
import { useState } from 'react'

import Switch from '../components/Switch'
import NumberField from '../components/NumberField'
import Result from '../components/Result'
import { useCalculatePercent } from '../utils/calculate-percentage'

function Home() {
  const [sendActive, setSendActive] = useState(false)
  const [currentValue, setCurrentValue] = useState(0)

  const [result, commission] = useCalculatePercent(currentValue, sendActive)

  function handleChangeValue(e) {
    e && e.preventDefault()
    const { value } = e.target

    setCurrentValue(value)
  }

  function handleToggleSendActive(newValue) {
    setSendActive(newValue)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Calculadora de Comisiones para PayPal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-5 my-5 max-w-md main-container">
        <header className="flex flex-row items-center">
          <img src="/iso.png" alt="App icon" className="h-12 w-12" />
          <img src="/pp-logo.png" alt="PayPal logo" className="h-7 ml-2" />
        </header>
        <h1 className="text-lg mr-16 mt-3">
          Calculadora de comisiones de <b>PayPal</b>
        </h1>
        <div className="mt-3">
          <Switch
            active={sendActive}
            setActive={handleToggleSendActive}
            label="Activar Enviar"
          />
        </div>
        <NumberField
          value={currentValue === 0 ? '' : currentValue}
          handleChange={handleChangeValue}
          label={`${
            sendActive ? 'Cantidad a Enviar' : 'Cantidad que desea Recibir'
          } :`}
        />
        {result !== 0 && (
          <>
            <p className="text-center mt-2 text-sm">
              {sendActive ? 'Cantidad que se recibira' : 'Es necesario enviar'}:
            </p>
            <div className="relative">
              <Result value={result} key={currentValue} />
            </div>
            <p className="text-center mt-3">
              Comision de <b>{commission}usd</b>
            </p>
          </>
        )}
      </main>
    </div>
  )
}

export default Home
