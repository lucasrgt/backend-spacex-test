import { CoreStatus } from './core-types'

export type CoreModel = {
  serial: string
  block: number
  status: CoreStatus
  reuseCount: number
  rtlsAttempts: number
  rtlsLandings: number
  asdsAttempts: number
  asdsLandings: number
  lastUpdate: string
  launchIds: unknown[]
}
