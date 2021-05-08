import { useEffect, useState } from 'react'

const paypalFee = 0.3

export const defaultPercentage = 5.4

function useCalculatePercent(value, typeActive) {
  const [result, setResult] = useState(0)
  const [commission, setCommission] = useState(0)
  const [percentage, setPercentage] = useState(5.4)

  useEffect(() => {
    const IS_SERVER = typeof window === 'undefined'

    if (!IS_SERVER) {
      const value = localStorage.getItem('percentage')

      !!value && setPercentage(value)
    }
  }, [])

  const paypalCommission = Number(percentage)

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

  function calculatePercent(currentValue, typeActive) {
    if (validValue(currentValue) === 0) {
      return { totalCommission: 0, totalResult: 0 }
    }

    const { totalResult, totalCommission } = typeActive
      ? toReceive(currentValue)
      : toSend(currentValue)

    return { totalCommission, totalResult }
  }

  function validValue(testValue) {
    if (
      typeof testValue === 'string' &&
      !isNaN(testValue) &&
      testValue !== null &&
      testValue !== undefined &&
      testValue !== '' &&
      testValue.charAt(0) !== 0
    ) {
      return testValue
    }
    return 0
  }

  useEffect(() => {
    const { totalCommission, totalResult } = calculatePercent(value, typeActive)

    setCommission(totalCommission)
    setResult(totalResult)
  }, [value, typeActive])

  return [result, commission]
}

export { useCalculatePercent }
