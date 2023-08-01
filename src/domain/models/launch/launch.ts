import {
  Capsule,
  Core,
  Crew,
  Failure,
  Fairings,
  LaunchDatePrecision,
  LaunchPad,
  Links,
  Payload,
  Ship
} from './launch-types'

export type LaunchModel = {
  id: number | string
  flightNumber: number
  name: string
  dateUtc: string
  dateUnix: number
  dateLocal: string
  datePrecision: LaunchDatePrecision
  staticFireDateUtc: string
  staticFireDateUnix: number
  tbd: boolean
  net: boolean
  window: number
  rocketId: number
  success: boolean
  failures: Failure[]
  upcoming: boolean
  details: string
  fairings: Fairings
  crews: Crew[]
  ships: Ship[]
  capsules: Capsule[]
  payloads: Payload[]
  launchpad: LaunchPad
  cores: Core[]
  links: Links
  autoUpdate: boolean
  launchLibraryId: string
}
