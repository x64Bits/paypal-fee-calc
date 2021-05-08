import Head from 'next/head'
import { useEffect, useState } from 'react'
import { FiSettings } from 'react-icons/fi'

import Switch from '../components/Switch'
import NumberField from '../components/NumberField'
import Result from '../components/Result'
import {
  defaultPercentage,
  useCalculatePercent,
} from '../utils/calculate-percentage'
import { Header } from '../components/Header'
import { formatCurrency } from '../utils/format-currency'
import { IS_SERVER, IS_EXT } from '../utils/constants'

function Home() {
  const [typeActive, setTypeActive] = useState(false)
  const [currentValue, setCurrentValue] = useState(0)
  const [percentage, setPercentage] = useState(defaultPercentage)

  useEffect(() => {
    if (!IS_SERVER) {
      const value = localStorage.getItem('percentage')

      if (!!value) {
        setPercentage(value)
      } else {
        localStorage.setItem('percentage', defaultPercentage)
      }
    }
  }, [])

  const [result, commission] = useCalculatePercent(currentValue, typeActive)

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
        <Header href={`/settings${IS_EXT ? '.html' : ''}`} Icon={FiSettings} />
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
              Comisión de <b>USD {formatCurrency(commission)}</b>{' '}
              {`(${percentage}% + $0.30)`}
            </p>
          </>
        )}
      </main>
    </div>
  )
}

export default Home
