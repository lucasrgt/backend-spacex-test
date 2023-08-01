import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Links } from '../../../../../../src/domain/models/company/company-types'
import {
  Fairings,
  Crew,
  Ship,
  Capsule,
  Payload,
  LaunchPad,
  Core
} from '../../../../../../src/domain/models/launch/launch-types'

@Entity({ name: 'lancamentos' })
export class PgLaunch {
  @PrimaryGeneratedColumn() id: number

  @Column() flightNumber: number

  @Column() name: string

  @Column() dateUtc: string

  @Column() dateUnix: number

  @Column() datePrecision: string

  @Column() staticFireDateUtc: string

  @Column() staticFireDateUnix: number

  @Column() tbd: boolean

  @Column() net: boolean

  @Column() window: number

  @Column() rocketId: number

  @Column() success: boolean

  @Column() failures: number[]

  @Column() upcoming: boolean

  @Column() details: string

  @Column() fairings: Fairings

  @Column() crews: Crew[]

  @Column() ships: Ship[]

  @Column() capsules: Capsule[]

  @Column() payloads: Payload[]

  @Column() launchpad: LaunchPad

  @Column() cores: Core[]

  @Column() links: Links

  @Column() autoUpdate: boolean

  @Column() launchLibraryId: string
}
