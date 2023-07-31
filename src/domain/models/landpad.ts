export interface LandpadModel {
  name: string
  fullName: string
  status:
    | 'active'
    | 'inactive'
    | 'unknown'
    | 'retired'
    | 'lost'
    | 'under construction'
  type: string
  locality: string
  region: string
  latitude: number
  longitude: number
  landindAttempts: number
  landindSuccesses: number
  wikipedia: string
  details: string
  launchesIds: number[]
  images: Image
}

interface Image {
  large: string[]
}
