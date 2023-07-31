export type Launch = {
  launchId: number
}

export type Dragon = {
  capsule: Capsule
  massReturnedKg: number
  massReturnedLbs: number
  flightTimeSec: number
  manifest: string
  waterLanding: boolean
  landLanding: boolean
}

export type Capsule = {
  capsuleId: number
}
