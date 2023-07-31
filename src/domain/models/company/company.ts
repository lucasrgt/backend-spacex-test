import { Headquarter, Links } from './company-types'

export type CompanyModel = {
  name: string
  founder: string
  founded: number
  employees: number
  vehicles: number
  launchSites: number
  testSites: number
  ceo: string
  cto: string
  coo: string
  ctoPropulsion: string
  valuation: number
  headquarters: Headquarter[]
  links: Links
  summary: string
}
