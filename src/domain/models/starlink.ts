export interface StarlinkModel {
  version: string
  launchId: number
  longitude: number
  latitude: number
  heightKm: number
  velocityKms: number
  spaceTrack: SpaceTrack
}

interface SpaceTrack {
  ccdsdsOmmVers: string
  comment: string
  creationDate: string
  originator: string
  objectName: string
  objectId: string
  centerName: string
  refFrame: string
  timeSystem: string
  meanElementTheory: string
  epoch: string
  meanMotion: number
  eccentricity: number
  inclination: number
  raOfAscNode: number
  argOfPericenter: number
  meanAnomaly: number
  ephemerisType: number
  classificationType: string
  noradCatId: number
  elementSetNo: number
  revAtEpoch: number
  bstar: number
  meanMotionDdot: number
  semimajorAxis: number
  period: number
  apoapsis: number
  periapsis: number
  objectType: string
  rcsSize: string
  countryCode: string
  launchDate: string
  site: string
  decayDatE: string
  decayed: number
  file: number
  gpId: number
  tleLineOne: string
  tleLineTwo: string
}
