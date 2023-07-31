export interface LaunchPadModel {
  name: string
  fullName: string
  status:
    | 'active'
    | 'inactive'
    | 'unknown'
    | 'retired'
    | 'lost'
    | 'under construction'
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

interface Rocket {
  rocketId: number
}

interface Launch {
  launchId: number
}

interface Images {
  large: string[]
}
