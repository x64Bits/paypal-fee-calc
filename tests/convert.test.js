import { renderHook } from '@testing-library/react-hooks'

import { useCalculatePercent } from '../utils/calculate-percentage'

const testValue = '10'

const wrongValues = [undefined, null, '', NaN]

const testActive = false

describe('Testing useCalculatePercent Hook', () => {
  it('result must be correct', () => {
    const response = renderHook(() =>
      useCalculatePercent(testValue, testActive)
    )
    console.log(response)
    const expected = 'string'

    const received = response
    expect(received).toEqual(expected)
  })
})

// wrongValues.map((wrongValue) => {
//   test('get 0 from wrong values', () => {
//     expect(calculatePercent(wrongValue, testActive).totalResult).toBe(0)
//   })
// })

// test('convert return total as string', () => {
//   const [result] = useCalculatePercent(testValue, testActive)

//   expect(typeof result).toBe('string')
// })

// test('test convert total get 10.89', () => {
//   const [result] = useCalculatePercent(testValue, testActive)

//   expect(typeof result).toBe('10.89')
// })

// test('test convert commission 0.89', () => {
//   const [commission] = useCalculatePercent(testValue, testActive)
//   expect(commission).toBe('0.89')
// })
