export interface CrewModel {
  name: string
  status: 'active' | 'inactive' | 'retired' | 'unknown'
  agency: string
  image: string
  wikipedia: string
  launches: number[]
}
