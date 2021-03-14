import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'

import Switch from '../components/Switch'
import NumberField from '../components/NumberField'
import Result from '../components/Result'

const paypalCommission = 5.4

const paypalFee = 0.3

export default function Home() {
  const [sendActive, setSendActive] = useState(false)
  const [result, setResult] = useState()
  const [commission, setCommission] = useState()

  const form = useRef(null)

  const [currentValue, setCurrentValue] = useState()

  useEffect(() => {
    currentValue && calculatePercent(currentValue)
  }, [sendActive, currentValue])

  function getResult(value) {
    const crrValue = parseFloat(value)
    return parseFloat(
      (100 * (paypalFee + crrValue)) / (0 - paypalCommission + 100)
    ).toFixed(2)
  }

  function getCommission(value) {
    const crrValue = parseFloat(value)

    const crrResult = getResult(crrValue)

    const parseCommission = parseFloat(
      Math.round(crrResult * 100) / 100 - crrValue
    ).toFixed(2)

    return parseCommission
  }

  function getReceiveCommission(value) {
    const crrValue = parseFloat(value)
    return parseFloat((paypalCommission / 100) * crrValue + paypalFee).toFixed(
      2
    )
  }

  function toSend(value) {
    const crrCommission = getCommission(value)
    const crrResult = getResult(value)

    return { totalResult: crrResult, totalCommission: crrCommission }
  }

  function toReceive(value) {
    const crrCommission = getReceiveCommission(value)
    const crrResult = value - crrCommission

    return { totalResult: crrResult, totalCommission: crrCommission }
  }

  function calculatePercent(currentValue) {
    const { totalResult, totalCommission } = sendActive
      ? toReceive(currentValue)
      : toSend(currentValue)

    setCommission(totalCommission)
    setResult(totalResult)
  }

  function handleChangeValue(e) {
    e && e.preventDefault()
    const { value } = e.target

    if (value.length === 0) {
      setResult(null)
      setCommission(null)
    } else {
      calculatePercent(value)
    }
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
        <form onSubmit={null} ref={form} className="mt-5">
          <NumberField
            value={currentValue}
            handleChange={handleChangeValue}
            label={`${
              sendActive ? 'Cantidad a Enviar' : 'Cantidad que desea Recibir'
            } :`}
          />
        </form>
        {result && (
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
