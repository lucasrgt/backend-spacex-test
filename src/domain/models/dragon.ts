export interface DragonModel {
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

interface HeatShield {
  material: string
  sizeMeters: number
  tempDegrees: number
  devPartner: string
}

interface Mass {
  kg: number
  lb: number
}

interface Vol {
  cubicMeters: number
  cubicFeet: number
}

interface PressurizedCapsule {
  payloadVolume: Vol
}

interface Trunk {
  trunkVolume: Vol
  cargo: Cargo
}

interface Cargo {
  solarArray: number
  unpressurizedCargo: boolean
}

interface Height {
  meters: number
  feet: number
}

interface Diameter {
  meters: number
  feet: number
}
