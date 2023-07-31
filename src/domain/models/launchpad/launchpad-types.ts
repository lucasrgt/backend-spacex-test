export type LaunchpadStatus =
  | 'active'
  | 'inactive'
  | 'unknown'
  | 'retired'
  | 'lost'
  | 'under construction'

export type Rocket = {
  rocketId: number
}

export type Launch = {
  launchId: number
}

export type Images = {
  large: string[]
}
