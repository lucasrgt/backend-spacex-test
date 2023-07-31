import {
  Diameter,
  Engines,
  FirstStage,
  Height,
  Mass,
  SecondStage
} from './rocket-types'

export type RocketModel = {
  name: string
  type: string
  active: boolean
  stages: number
  boosters: number
  costPerLaunch: number
  successRatePct: number
  firstFlight: string
  country: string
  company: string
  height: Height
  diameter: Diameter
  mass: Mass
  payloadWeights: unknown
  firstStage: FirstStage
  secondStage: SecondStage
  engines: Engines
}
