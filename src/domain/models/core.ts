export interface CoreModel {
  serial: string
  block: number
  status: 'active' | 'inactive' | 'unknown' | 'expended' | 'lost' | 'retired'
  reuseCount: number
  rtlsAttempts: number
  rtlsLandings: number
  asdsAttempts: number
  asdsLandings: number
  lastUpdate: string
  launches: number[]
}
