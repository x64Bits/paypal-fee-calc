import { calculatePercent } from '../utils/calculate-percentage'

const testValue = '10'

const wrongValues = [undefined, null, '', NaN]

const testActive = false

wrongValues.map((wrongValue) => {
  test('get 0 from wrong values', () => {
    expect(calculatePercent(wrongValue, testActive).totalResult).toBe(0)
  })
})

test('convert return total as string', () => {
  expect(typeof calculatePercent(testValue, testActive).totalResult).toBe(
    'string'
  )
})

test('test convert total get 10.89', () => {
  expect(calculatePercent(testValue, testActive).totalResult).toBe('10.89')
})

test('test convert commission 0.89', () => {
  expect(calculatePercent(testValue, testActive).totalCommission).toBe('0.89')
})
