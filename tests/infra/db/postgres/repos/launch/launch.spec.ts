import { newDb } from 'pg-mem'
import { AddLaunchRepository } from '../../../../../../src/data/contracts/add-launch-repository'
import { LaunchModel } from '../../../../../../src/domain/models'
import { AddLaunchModel } from '../../../../../../src/domain/usecases/add-launch/add-launch-types'
import { fakeLaunch } from '../../../../../shared/fake-models/fake-launch'
import { PgLaunch } from './launch-entity'

const fakeLaunchWithIdNumber = Object.assign({}, fakeLaunch, { id: 1 })

class PgLaunchRepository implements AddLaunchRepository {
  async add(launchData: AddLaunchModel): Promise<LaunchModel> {}
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
