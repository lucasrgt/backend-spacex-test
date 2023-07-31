import {
  Diameter,
  HeatShield,
  Height,
  Mass,
  PressurizedCapsule,
  Trunk,
  Vol
} from './dragon-types'

export type DragonModel = {
  name: string
  type: string
  active: boolean
  crewCapacity: number
  sidewallAngleDeg: number
  orbitDurationYr: number
  dryMassKg: number
  dryMassLb: number
  firstFlight: string
  heatShield: HeatShield
  thrusters: unknown
  launchPayloadMass: Mass
  launchPayloadVol: Vol
  returnPayloadMass: Mass
  returnPayloadVol: Vol
  pressurizedCapsule: PressurizedCapsule
  trunk: Trunk
  heightWTrunk: Height
  diameter: Diameter
  flickrImages: string[]
  wikipedia: string
  description: string
}
