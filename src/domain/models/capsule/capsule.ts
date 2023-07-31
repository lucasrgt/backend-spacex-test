import { CapsuleStatus, CapsuleType } from './capsule-types'

export type CapsuleModel = {
  serial: string
  status: CapsuleStatus
  type: CapsuleType
  dragonId: unknown
  reuseCount: number
  waterLandings: number
  landLandings: number
  lastUpdate: string
  launchesIds: unknown[]
}
