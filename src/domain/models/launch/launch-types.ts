export type LaunchDatePrecision =
  | 'half'
  | 'quarter'
  | 'year'
  | 'month'
  | 'day'
  | 'hour'

export type Failure = {
  time: number
  altitude: number
  reason: number
}

export type Fairings = {
  reused: boolean
  recoveryAttempt: boolean
  recovered: boolean
  shipIds: number[]
}

export type Crew = {
  crewId: number
  role: string
}

export type Ship = {
  shipId: number[]
}

export type Capsule = {
  capsuleId: number
}

export type Payload = {
  payloadId: number
}

export type LaunchPad = {
  launchpadId: number
}

export type Core = {
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

export type Landpad = {
  landpadId: number
}

export type Links = {
  patch: Patch
  reddit: Reddit
  flickr: Flickr
  presskit: string
  webcasts: string
  youtubeId: string
  article: string
  wikipedia: string
}

export type Patch = {
  small: string
  large: string
}

export type Reddit = {
  campaign: string
  launch: string
  media: string
  recovery: string
}

export type Flickr = {
  small: string[]
  original: string[]
}
