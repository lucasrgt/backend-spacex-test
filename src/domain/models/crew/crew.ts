import { CrewStatus } from './crew-types'

export type CrewModel = {
  name: string
  status: CrewStatus
  agency: string
  image: string
  wikipedia: string
  launchIds: unknown[]
}
