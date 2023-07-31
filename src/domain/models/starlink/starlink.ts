import { SpaceTrack } from './starlink-types'

export type StarlinkModel = {
  version: string
  launchId: number
  longitude: number
  latitude: number
  heightKm: number
  velocityKms: number
  spaceTrack: SpaceTrack
}
