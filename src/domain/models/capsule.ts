export interface CapsuleModel {
  serial: string
  status: 'unknown' | 'active' | 'retired' | 'destroyed'
  type: 'Dragon 1.0' | 'Dragon 1.1' | 'Dragon 2.0'
  dragonId: number
  reuseCount: number
  waterLandings: number
  landLandings: number
  lastUpdate: string
  launchesIds: number[]
}
