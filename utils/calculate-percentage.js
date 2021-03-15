import { useEffect, useState } from 'react'

const paypalCommission = 5.4

const paypalFee = 0.3

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
  return parseFloat((paypalCommission / 100) * crrValue + paypalFee).toFixed(2)
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

export function calculatePercent(currentValue, sendActive) {
  const { totalResult, totalCommission } = sendActive
    ? toReceive(currentValue)
    : toSend(currentValue)

  return { totalCommission, totalResult }
}

function useCalculatePercent(value, sendActive) {
  const [result, setResult] = useState(0)
  const [commission, setCommission] = useState(0)

  useEffect(() => {
    if (value.length === 0 || value === '0') {
      setResult(0)
      setCommission(0)
      return
    }

    const { totalCommission, totalResult } = calculatePercent(value, sendActive)

    setCommission(totalCommission)
    setResult(totalResult)
  }, [value, sendActive])

  return [result, commission]
}

export { useCalculatePercent }