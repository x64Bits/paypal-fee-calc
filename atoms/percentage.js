import { atom } from 'recoil'

const percentageState = atom({
  key: 'percentageState',
  default: 5.4,
})

export { percentageState }
