import { newDb } from 'pg-mem'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { AddLaunchRepository } from '../../../../../src/data/contracts/add-launch-repository'
import { LaunchModel } from '../../../../../src/domain/models'
import { Links } from '../../../../../src/domain/models/company/company-types'
import {
  Fairings,
  Crew,
  Ship,
  Capsule,
  Payload,
  LaunchPad,
  Core
} from '../../../../../src/domain/models/launch/launch-types'
import { AddLaunchModel } from '../../../../../src/domain/usecases/add-launch/add-launch'
import { fakeLaunch } from '../../../../shared/fake-models/fake-launch'

const fakeLaunchWithIdNumber = Object.assign({}, fakeLaunch, { id: 1 })

class PgLaunchRepository implements AddLaunchRepository {
  async add(launchData: AddLaunchModel): Promise<LaunchModel> {}
}

@Entity({ name: 'lancamentos' })
class PgLaunch {
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

describe('PgLaunchRepository', () => {
  describe('load', () => {
    test('should return an account if email ', async () => {
      // arrange
      const db = newDb()
      const connection = await db.adapters.createTypeormDataSource({
        type: 'postgres',
        entities: []
      })
      await connection.syncronize()
      const pgLaunchRepo = connection.getRepository(PgLaunch)

      await pgLaunchRepo.save({ flightNumber: 1 })

      const sut = new PgLaunchRepository()

      // act
      const launch = await sut.add(fakeLaunchWithIdNumber)

      console.log(launch)

      // assert
      expect(launch).toEqual({ id: 2 })
    })
  })
})
