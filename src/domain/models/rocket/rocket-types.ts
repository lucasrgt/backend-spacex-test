export type Height = {
  meters: number
  feet: number
}

export type Diameter = {
  meters: number
  feet: number
}

export type Mass = {
  kg: number
  lb: number
}

export type FirstStage = {
  reusable: boolean
  engines: number
  fuelAmountTons: number
  burnTimeSec: number
  thrustSeaLevel: Thrust
  thrustVacuum: Thrust
}

export type Thrust = {
  kN: number
  lbf: number
}

export type SecondStage = {
  reusable: boolean
  engines: number
  fuelAmountTons: number
  burnTimeSec: number
  thrust: Thrust
  payloads: Payloads
}

export type Payloads = {
  optionOne: string
  compositeFairing: CompositeFairing
}

export type CompositeFairing = {
  height: Height
  diameter: Diameter
}

export type Engines = {
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

export type ISP = {
  seaLevel: number
  vacuum: number
}

export type LandingLegs = {
  number: number
  material: unknown
}

export type FlickrImages = {
  type: string[]
}
