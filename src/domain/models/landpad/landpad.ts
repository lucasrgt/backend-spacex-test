import { Images, LandpadStatus } from './landpad-types'

export type LandpadModel = {
  name: string
  fullName: string
  status: LandpadStatus
  type: string
  locality: string
  region: string
  latitude: number
  longitude: number
  landindAttempts: number
  landindSuccesses: number
  wikipedia: string
  details: string
  launchesIds: unknown[]
  images: Images
}
