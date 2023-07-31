import { LaunchModel } from '../../../domain/models'
import { AddLaunchModel } from '../../../domain/usecases/add-launch/add-launch'
import { AddLaunchRepository } from '../../protocols/add-launch-repository'
import { fakeLaunch } from './fake-data'

const makeAddLaunchRepository = (): AddLaunchRepository => {
  class AddLaunchRepositoryStub implements AddLaunchRepository {
    async add(_launchData: AddLaunchModel): Promise<LaunchModel> {
      return new Promise((resolve) => resolve(fakeLaunch))
    }
  }
  return new AddLaunchRepositoryStub()
}

const makeSut = () => {
  const addLaunchRepositoryStub = makeAddLaunchRepository()
  return addLaunchRepositoryStub
}

describe('DbAddLaunch Usecase', () => {
  test('should call AddLaunchRepository with correct values', async () => {
    // arrange
    const sut = makeSut()
    const addSpy = jest.spyOn(sut, 'add')

    // act
    await sut.add(fakeLaunch)

    // assert
    expect(addSpy).toHaveBeenCalledWith(fakeLaunch)
  })
})
