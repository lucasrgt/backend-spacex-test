export interface CompanyModel {
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

interface Headquarter {
  address: string
  city: string
  state: string
}

interface Links {
  website: string
  flickr: string
  twitter: string
  elonTwitter: string
}
