export interface ShipModel {
  name: string
  legacyId: string
  model: string
  type: string
  roles: string[]
  active: boolean
  imo: number
  mmsi: number
  abs: number
  class: number
  massKg: number
  massLbs: number
  yearBuilt: number
  homePort: string
  status: string
  speedKn: number
  courseDeg: number
  latitude: number
  longitude: number
  lastAisUpdate: string
  link: string
  image: string
  launches: Launch
}

interface Launch {
  launchId: number
}
