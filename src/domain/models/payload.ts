export interface PayloadModel {
  name: string
  type: string
  reused: boolean
  launch: Launch
  customers: string[]
  noradIds: number[]
  nationalities: string[]
  manufacturers: string[]
  massKg: number
  massLbs: number
  orbit: string
  referenceSystem: string
  regime: string
  longitude: number
  semiMajorAxisKm: number
  eccentricity: number
  periapsisKm: number
  apoapsisKm: number
  inclinationDeg: number
  periodMin: number
  lifespanYears: number
  epoch: string
  meanMotion: number
  raan: number
  argOfPericenter: number
  meanAnomaly: number
  dragon: Dragon
}

interface Launch {
  launchId: number
}

interface Dragon {
  capsule: Capsule
  massReturnedKg: number
  massReturnedLbs: number
  flightTimeSec: number
  manifest: string
  waterLanding: boolean
  landLanding: boolean
}

interface Capsule {
  capsuleId: number
}
