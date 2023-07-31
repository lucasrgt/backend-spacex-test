export interface LaunchModel {
  flightNumber: number
  name: string
  dateUtc: string
  dateUnix: number
  dateLocal: string
  datePrecision: 'half' | 'quarter' | 'year' | 'month' | 'day' | 'hour'
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
  autoUpdate: boolean
  launchLibraryId: string
}

interface Failure {
  time: number
  altitude: number
  reason: number
}

interface Fairings {
  reused: boolean
  recoveryAttempt: boolean
  recovered: boolean
  shipIds: number[]
}

interface Crew {
  crewId: number
  role: string
}

interface Ship {
  shipId: number[]
}

interface Capsule {
  capsuleId: number
}

interface Payload {
  payloadId: number
}

interface LaunchPad {
  launchpadId: number
}

interface Core {
  coreId: number
  flight: number
  gridfins: boolean
  legs: boolean
  reusded: boolean
  landingAttempt: boolean
  landingSuccess: boolean
  landingType: string
  landpad: Landpad
}

interface Landpad {
  landpadId: number
}

interface Links {
  patch: Patch
  reddit: Reddit
  flickr: Flickr
  presskit: string
  webcasts: string
  youtubeId: string
  article: string
  wikipedia: string
}

interface Patch {
  small: string
  large: string
}

interface Reddit {
  campaign: string
  launch: string
  media: string
  recovery: string
}

interface Flickr {
  small: string[]
  original: string[]
}
