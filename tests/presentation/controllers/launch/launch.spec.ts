import { LaunchModel } from '../../../../src/domain/models'
import { AddLaunchModel } from '../../../../src/domain/usecases/add-launch/add-launch'
import { AddLaunch } from '../../../../src/domain/usecases/add-launch/add-launch-protocol'
import { LaunchController } from '../../../../src/presentation/controllers/launch/launch'
import { MissingParamError } from '../../../../src/presentation/errors'
import { fakeLaunch } from '../../../shared/fake-models/fake-launch'

const makeAddLaunch = (): AddLaunch => {
  class AddLaunchStub implements AddLaunch {
    async add(launchData: AddLaunchModel): Promise<LaunchModel> {
      return new Promise((resolve) => resolve(fakeLaunch))
    }
  }
  return new AddLaunchStub()
}

const makeObjectWithMissingParam = (missingParam: string): any => {
  const mockLaunchData = fakeLaunch
  delete mockLaunchData[missingParam]
  return mockLaunchData
}

type SutTypes = {
  sut: LaunchController
  addLaunchStub: AddLaunch
}

const makeSut = (): SutTypes => {
  const addLaunchStub = makeAddLaunch()
  const sut = new LaunchController(addLaunchStub)

  return { sut, addLaunchStub }
}

describe('Launch Controller', () => {
  test('should return 400 if no flightNumber is provided', async () => {
    // arrange
    const { sut } = makeSut()

    const httpRequest = {
      body: makeObjectWithMissingParam('flightNumber')
    }

    // act
    const httpResponse = await sut.handle(httpRequest)

    // assert
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('flightNumber'))
  })
})
