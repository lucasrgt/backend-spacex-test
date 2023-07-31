import { Links } from './history-types'

export type HistoryModel = {
  title: string
  eventDateUtc: string
  eventDateUnix: number
  details: string
  links: Links
}
