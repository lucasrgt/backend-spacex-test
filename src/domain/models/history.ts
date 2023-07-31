export interface HistoryModel {
  title: string
  eventDateUtc: string
  eventDateUnix: number
  details: string
  links: Links
}

interface Links {
  article: string
}
