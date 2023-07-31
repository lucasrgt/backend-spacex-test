export type HeatShield = {
  material: string
  sizeMeters: number
  tempDegrees: number
  devPartner: string
}

export type Mass = {
  kg: number
  lb: number
}

export type Vol = {
  cubicMeters: number
  cubicFeet: number
}

export type PressurizedCapsule = {
  payloadVolume: Vol
}

export type Trunk = {
  trunkVolume: Vol
  cargo: Cargo
}

export type Cargo = {
  solarArray: number
  unpressurizedCargo: boolean
}

export type Height = {
  meters: number
  feet: number
}

export type Diameter = {
  meters: number
  feet: number
}
