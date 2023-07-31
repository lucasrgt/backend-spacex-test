export interface RoadsterModel {
  name: string
  launchDateUtc: string
  launchDateUnix: number
  launchMassLbs: number
  noradId: number
  epochJd: number
  orbitType: string
  apoapsisAu: number
  periapsisAu: number
  semiMajorAxisAu: number
  eccentricity: number
  inclination: number
  longitude: number
  periapsisArg: number
  periodDays: number
  speedKph: number
  speedMph: number
  earthDistanceKm: number
  earthDistanceMi: number
  marsDistanceKm: number
  marsDistanceMi: number
  flickrImages: string[]
  wikipedia: string
  video: string
  details: string
}
