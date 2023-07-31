export interface RocketModel {
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

interface Height {
  meters: number
  feet: number
}

interface Diameter {
  meters: number
  feet: number
}

interface Mass {
  kg: number
  lb: number
}

interface FirstStage {
  reusable: boolean
  engines: number
  fuelAmountTons: number
  burnTimeSec: number
  thrustSeaLevel: Thrust
  thrustVacuum: Thrust
}

interface Thrust {
  kN: number
  lbf: number
}

interface SecondStage {
  reusable: boolean
  engines: number
  fuelAmountTons: number
  burnTimeSec: number
  thrust: Thrust
  payloads: Payloads
}

interface Payloads {
  optionOne: string
  compositeFairing: CompositeFairing
}

interface CompositeFairing {
  height: Height
  diameter: Diameter
}

interface Engines {
  number: number
  type: string
  version: string
  layout: string
  isp: ISP
  engineLossMax: number
  propellantOne: string
  propellantTwo: string
  thrustSeaLevel: Thrust
  thrustVacuum: Thrust
  thrustToWeight: number
  landingLegs: LandingLegs
  flickrImages: FlickrImages
  wikipedia: string
  description: string
}

interface ISP {
  seaLevel: number
  vacuum: number
}

interface LandingLegs {
  number: number
  material: unknown
}

interface FlickrImages {
  type: string[]
}
