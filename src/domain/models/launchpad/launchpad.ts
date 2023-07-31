import { Images, Launch, LaunchpadStatus, Rocket } from './launchpad-types'

export type LaunchPadModel = {
  name: string
  fullName: string
  status: LaunchpadStatus
  locality: string
  region: string
  timezone: string
  latitude: number
  longitude: number
  launchAttempts: number
  launchSuccesses: number
  rockets: Rocket[]
  launches: Launch[]
  details: string
  images: Images
}
