import Head from 'next/head'
import { useState } from 'react'
import { FiSettings } from 'react-icons/fi'

import Switch from '../components/Switch'
import NumberField from '../components/NumberField'
import Result from '../components/Result'
import { useCalculatePercent } from '../utils/calculate-percentage'
import { Header } from '../components/Header'
import { useRecoilState } from 'recoil'
import { percentageState } from '../atoms/percentage'
import { formatCurrency } from '../utils/format-currency'

function Home() {
  const [typeActive, setTypeActive] = useState(false)
  const [currentValue, setCurrentValue] = useState(0)

  const [result, commission] = useCalculatePercent(currentValue, typeActive)

  const [percentage] = useRecoilState(percentageState)

  function handleChangeValue(newValue) {
    setCurrentValue(newValue)
  }

  function handleToggleTypeActive(newValue) {
    setTypeActive(newValue)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Calculadora de Comisiones para PayPal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-5 my-5 max-w-md main-container">
        <Header actionLink="/settings" Icon={FiSettings} />
        <h1 className="text-lg mr-16 mt-3 text-primary mb-3">
          Calculadora de comisiones de <b>PayPal</b>
        </h1>
        <hr className="border-separator" />
        <div className="mt-3 mb-3">
          <Switch active={typeActive} setActive={handleToggleTypeActive} />
        </div>
        <hr className="border-separator" />
        <NumberField
          typeActive={typeActive}
          value={currentValue === 0 ? '' : currentValue}
          handleChange={handleChangeValue}
          label={`${
            typeActive ? 'Cantidad a Enviar' : 'Cantidad que desea Recibir'
          } :`}
        />
        {result !== 0 && (
          <>
            <p className="text-center text-secondary mt-2 text-sm">
              {typeActive ? 'Cantidad que se recibira' : 'Es necesario enviar'}:
            </p>
            <div className="relative">
              <Result value={result} key={currentValue} />
            </div>
            <p className="text-center text-secondary mt-3">
              Comisión de <b>USD {formatCurrency(commission)}</b>
            </p>
          </>
        )}
      </main>
    </div>
  )
}

export default Home
